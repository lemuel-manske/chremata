import { AxeBuilder } from '@axe-core/playwright';

import type { Locator, ExpectMatcherState } from '@playwright/test';

export interface AccessibilityViolationsOptions {
  disableAccessibilityRules?: string[];
}

export interface AccessibilityViolationsResult {
  actual: unknown;
  expected: unknown;
  message: () => string;
  name: string;
  pass: boolean;
}

export type AccessibilityViolationsFunction = (
  state: ExpectMatcherState,
  locator: Locator,
  options?: AccessibilityViolationsOptions
) => Promise<AccessibilityViolationsResult>;

export const accessibilityViolationsFixture: AccessibilityViolationsFunction = async (
  state: ExpectMatcherState,
  locator: Locator,
  options: AccessibilityViolationsOptions = {}
) => {
  const { disableAccessibilityRules = [] } = options;
  const page = 'page' in locator ? locator.page() : locator;

  const accessibilityScanResults = await new AxeBuilder({ page })
    .disableRules([...disableAccessibilityRules, 'page-has-heading-one', 'region', 'landmark-one-main'])
    .analyze();

  const { violations } = accessibilityScanResults;
  const pass = violations.length <= 0;

  const assertionName = 'toNotHaveAccessibilityViolations';

  const matcherHint = state.utils.matcherHint(assertionName, undefined, undefined, { isNot: state.isNot });
  const expectedString = `Expected: ${state.utils.printExpected([])}`;
  const receivedString = `Received: ${state.utils.printReceived(violations)}`;

  const message = () => `${matcherHint}\n\n${expectedString}\n${receivedString}`;

  return {
    actual: violations,
    expected: [],
    message,
    name: assertionName,
    pass,
  };
};
