import { test, expect } from '@chremata-preset/playwright/test';

test('should render a card', { tag: ['@ch-card'] }, async ({ page }) => {
  await page.render(`
    <ch-card>
      <ch-card-header slot="header" title="My card" />
    </ch-card>
  `);

  const card = page.getByRole('article');

  await expect(card).toBeVisible();
});
