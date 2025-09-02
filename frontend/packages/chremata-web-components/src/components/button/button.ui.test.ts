import { test, expect } from '@chremata-preset/playwright/test';

test('should render', { tag: ['@ch-button'] }, async ({ page }) => {
  await page.render(`
    <ch-button label="Click me"/>`);

  const button = page.getByRole('button', { name: 'Click me' });

  await expect(button).toBeVisible();
});

test('should be focused when clicked', { tag: ['@ch-button'] }, async ({ page }) => {
  await page.render(`
    <ch-button label="Click me"/>`);

  const button = page.getByRole('button', { name: 'Click me' });

  await button.click();

  await expect(button).toBeFocused();
});

test('should be disabled', { tag: ['@ch-button'] }, async ({ page }) => {
  await page.render(`
    <ch-button disabled label="Click me"/>`);

  const button = page.getByRole('button', { name: 'Click me' });

  await expect(button).toBeDisabled();
});

test('should be focused when [Tab] and [Enter] are pressed', { tag: ['@ch-button'] }, async ({ page }) => {
  await page.render(`
    <ch-button label="Click me"/>`);

  const button = page.getByRole('button', { name: 'Click me' });

  await page.keyboard.press('Tab');
  await page.keyboard.press('Enter');

  await expect(button).toBeFocused();
});

test('should be focused when [Tab] and [Space] are pressed', { tag: ['@ch-button'] }, async ({ page }) => {
  await page.render(`
    <ch-button label="Click me"/>`);

  const button = page.getByRole('button', { name: 'Click me' });

  await page.keyboard.press('Tab');
  await page.keyboard.press('Space');

  await expect(button).toBeFocused();
});
