import {
  test as baseTest,
  expect as baseExpect,
} from '@playwright/experimental-ct-react';

import type {
  CustomPlaywrightLocator,
  CustomPlaywrightPage,
} from './custom-types';

import {
  accessibilityViolationsFixture,
  type AccessibilityViolationsOptions,
} from './expect-fixtures/to-not-have-accessibility-violations';

export const expect = baseExpect.extend({
  async toNotHaveAccessibilityViolations(
    locator: CustomPlaywrightLocator | CustomPlaywrightPage,
    options?: AccessibilityViolationsOptions
  ) {
    return accessibilityViolationsFixture(this, locator, options);
  },
});

export const test = baseTest;
