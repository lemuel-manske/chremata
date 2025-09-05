import { test, expect } from '@chremata-preset/playwright/test';

test('should render a button', { tag: ['@ch-button'] }, async ({ page }) => {
  await page.render(`
    <ch-button label="Click me"/>`);

  const button = page.getByRole('button', { name: 'Click me' });

  await expect(button).toBeVisible();
});

test('should render a button with slotted content', { tag: ['@ch-button'] }, async ({ page }) => {
  await page.render(`
    <ch-button><span>Click me</span></ch-button>`);

  const button = page.locator('ch-button', { hasText: 'Click me' });

  await expect(button).toBeVisible();
});

test('should be focused when clicked', { tag: ['@ch-button'] }, async ({ page }) => {
  await page.render(`
    <ch-button label="Click me"/>`);

  const button = page.getByRole('button', { name: 'Click me' });

  await button.click();

  await expect(button).toBeFocused();
});

test('should render a disabled button', { tag: ['@ch-button'] }, async ({ page }) => {
  await page.render(`
    <ch-button disabled="true" label="Click me"/>`);

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
