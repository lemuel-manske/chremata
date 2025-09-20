import { test, expect } from '@chremata-preset/playwright/test';

import { Label } from '../label/label';

import { Banner } from './banner';

test('should render a Banner', async ({ mount, page }) => {
  await mount(
    <Banner>
      <Label>Banner</Label>
    </Banner>
  );

  const banner = page.getByRole('banner');

  await expect(banner).toNotHaveAccessibilityViolations();
});
