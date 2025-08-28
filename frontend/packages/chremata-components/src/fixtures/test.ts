import { expect as baseExpect, test as baseTest } from '@playwright/experimental-ct-react';

import { accessibilityViolationsFixture, type AccessibilityViolationsOptions } from './accessibility-violations';

import type { Locator, ExpectMatcherState } from '@playwright/test';

const expect = baseExpect.extend({
  async toNotHaveAccessibilityViolations(locator: Locator, options?: AccessibilityViolationsOptions) {
    return accessibilityViolationsFixture(this, locator, options);
  },
});

export { expect, baseTest as test };
