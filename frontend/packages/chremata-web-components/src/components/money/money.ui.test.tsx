import { test, expect } from '@playwright/experimental-ct-react';

import { Money } from './money';

test('should render USD', { tag: ['@ch-money'] }, async ({ mount, page }) => {
  await mount(<Money amount={1234.56} currency="USD" />);

  const money = page.getByText('+US$ 1.234,56');

  await expect(money).toBeVisible();
});

test(
  'should render negative USD',
  { tag: ['@ch-money'] },
  async ({ mount, page }) => {
    await mount(<Money amount={-1234.56} currency="USD" />);

    const money = page.getByText('-US$ 1.234,56');

    await expect(money).toBeVisible();
  }
);
