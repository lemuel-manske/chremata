import { test, expect } from '@chremata-preset/playwright/test';

test('should render', { tag: ['@ch-button'] }, async ({ page }) => {
  await page.render(`
    <ch-button>Click me</ch-button>`);

  const button = page.getByRole('button', { name: 'Click me' });

  await expect(button).toBeVisible();
});

test('should be focused when clicked', { tag: ['@ch-button'] }, async ({ page }) => {
  await page.render(`
    <ch-button>Click me</ch-button>`);

  const button = page.getByRole('button', { name: 'Click me' });

  await button.click();

  await expect(button).toBeFocused();
});

test('should be disabled', { tag: ['@ch-button'] }, async ({ page }) => {
  await page.render(`
    <ch-button disabled>Click me</ch-button>`);

  const button = page.getByRole('button', { name: 'Click me' });

  await expect(button).toBeDisabled();
});
