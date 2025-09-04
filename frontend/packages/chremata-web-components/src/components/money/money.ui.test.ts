import { test, expect } from '@chremata-preset/playwright/test';

test('should render money component', { tag: ['@ch-money'] }, async ({ page }) => {
  await page.render(`
    <ch-money currency="BRL" locale="pt-BR" amount="1234.56" />`);

  const money = page.getByText('+R$ 1.234,56');

  await expect(money).toBeVisible();
});

test('should render money component with negative amount', { tag: ['@ch-money'] }, async ({ page }) => {
  await page.render(`
    <ch-money currency="BRL" locale="pt-BR" amount="-1234.56" />`);

  const money = page.getByText('-R$ 1.234,56');

  await expect(money).toBeVisible();
});
