import { test, expect } from '@playwright/experimental-ct-react';

import { Label } from './label';

test(
  'should render a label',
  { tag: ['@ch-label'] },
  async ({ mount, page }) => {
    await mount(<Label>Label</Label>);

    const label = page.getByText('Label');

    await expect(label).toBeVisible();
  }
);
