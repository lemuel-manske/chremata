import { test, expect } from '@chremata-preset/playwright/test';

test('should render a card', { tag: ['@ch-card'] }, async ({ page }) => {
  await page.render(`
    <ch-card title="My card" />
  `);

  const card = page.getByRole('region', { name: 'My card' });

  await expect(card).toBeVisible();

  const body = page.locator('body');

  await expect(body).toMatchAriaSnapshot(`
    - region "My card"
  `);
});
