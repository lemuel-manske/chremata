import { test, expect } from '@playwright/test';

import './button';

test.describe('button', () => {
  test('is rendered', async ({ page }) => {
    await page.setContent('<ch-button></ch-button>');
  });
});
