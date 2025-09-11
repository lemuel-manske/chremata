import { AxeBuilder } from '@axe-core/playwright';

import type {
  CustomPlaywrightExpectMatcherState,
  CustomPlaywrightLocator,
  CustomPlaywrightPage,
} from '../custom-types';

/**
 * Options for configuring accessibility violations.
 */
export interface AccessibilityViolationsOptions {
  /**
   * This property allows you to specify which accessibility rules should be disabled.
   * Provide an array of rule IDs that you want to disable during the accessibility checks.
   */
  disableAccessibilityRules?: string[];
}

/**
 * Result of accessibility violation checks.
 *
 * @export
 * @interface AccessibilityViolationsResult
 */
export interface AccessibilityViolationsResult {
  /**
   * The actual result of the accessibility check.
   */
  actual: unknown;

  /**
   * The expected result of the accessibility check.
   */
  expected: unknown;

  /**
   * A function that returns a message describing the result.
   */
  message: () => string;

  /**
   * The name of the accessibility check.
   */
  name: string;

  /**
   * Indicates whether the accessibility check passed or failed.
   */
  pass: boolean;
}

/**
 * A function type for checking accessibility violations.
 *
 * @param state - The state of the custom Playwright expect matcher.
 * @param locator - The locator or page to check for accessibility violations.
 * @param options - Optional configuration options for the accessibility violations check.
 */
export type AccessibilityViolationsFunction = (
  state: CustomPlaywrightExpectMatcherState,
  locator: CustomPlaywrightLocator | CustomPlaywrightPage,
  options?: AccessibilityViolationsOptions
) => Promise<AccessibilityViolationsResult>;

/**
 * Checks for accessibility violations.
 *
 * @param state - The state of the custom Playwright expect matcher.
 * @param locator - The locator or page to check for accessibility violations.
 * @param options - Optional configuration options for the accessibility violations check.
 */
export const accessibilityViolationsFixture: AccessibilityViolationsFunction =
  async (
    state: CustomPlaywrightExpectMatcherState,
    locator: CustomPlaywrightLocator | CustomPlaywrightPage,
    options: AccessibilityViolationsOptions = {}
  ) => {
    const { disableAccessibilityRules = [] } = options;
    const page = 'page' in locator ? locator.page() : locator;

    const accessibilityScanResults = await new AxeBuilder({ page })
      .disableRules([
        ...disableAccessibilityRules,
        'page-has-heading-one',
        'region',
        'landmark-one-main',
      ])
      .analyze();

    const { violations } = accessibilityScanResults;
    const pass = violations.length <= 0;

    const assertionName = 'toNotHaveAccessibilityViolations';

    const matcherHint = state.utils.matcherHint(
      assertionName,
      undefined,
      undefined,
      { isNot: state.isNot }
    );
    const expectedString = `Expected: ${state.utils.printExpected([])}`;
    const receivedString = `Received: ${state.utils.printReceived(violations)}`;

    const message = () =>
      `${matcherHint}\n\n${expectedString}\n${receivedString}`;

    return {
      actual: violations,
      expected: [],
      message,
      name: assertionName,
      pass,
    };
  };
