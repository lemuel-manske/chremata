import { test, expect } from '@chremata-preset/playwright/test';

import { Button } from './button';

const tag = ['@ch-button'];

test('should render a button', { tag }, async ({ mount, page }) => {
  await mount(<Button label="Click me" />);

  const button = page.getByRole('button', { name: 'Click me' });

  await expect(button).toNotHaveAccessibilityViolations();
});

test(
  'should render a secondary variation button',
  { tag },
  async ({ mount, page }) => {
    await mount(
      <Button
        label="Click me"
        variant="secondary"
      />
    );

    const button = page.getByRole('button', { name: 'Click me' });

    await expect(button).toNotHaveAccessibilityViolations();
    await expect(page).toHaveScreenshot();
  }
);

test(
  'should render a secondary variation button with an Icon',
  { tag },
  async ({ mount, page }) => {
    await mount(
      <Button
        label="Click me"
        variant="secondary"
        icon="CoinIconSvg"
      />
    );

    const button = page.getByRole('button', { name: 'Click me' });

    await expect(button).toNotHaveAccessibilityViolations();
    await expect(page).toHaveScreenshot();
  }
);

test('should render a button with Icon', { tag }, async ({ mount, page }) => {
  await mount(
    <Button
      label="Click me"
      icon="CoinIconSvg"
    />
  );

  const button = page.getByRole('button', { name: 'Click me' });

  await expect(button).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test('should be focused when clicked', { tag }, async ({ mount, page }) => {
  await mount(<Button label="Click me" />);

  const button = page.getByRole('button', { name: 'Click me' });

  await button.click();

  await expect(button).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test('should render a disabled button', { tag }, async ({ mount, page }) => {
  await mount(
    <Button
      disabled
      label="Click me"
    />
  );

  const button = page.getByRole('button', { name: 'Click me' });

  await expect(button).toBeDisabled();

  await expect(button).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test(
  'should be focused when [Tab] and [Enter] are pressed',
  { tag },
  async ({ mount, page }) => {
    await mount(<Button label="Click me" />);

    const button = page.getByRole('button', { name: 'Click me' });

    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

    await expect(button).toBeFocused();

    await expect(button).toNotHaveAccessibilityViolations();
    await expect(page).toHaveScreenshot();
  }
);

test(
  'should be focused when [Tab] and [Space] are pressed',
  { tag },
  async ({ mount, page }) => {
    await mount(<Button label="Click me" />);

    const button = page.getByRole('button', { name: 'Click me' });

    await page.keyboard.press('Tab');
    await page.keyboard.press('Space');

    await expect(button).toBeFocused();

    await expect(button).toNotHaveAccessibilityViolations();
    await expect(page).toHaveScreenshot();
  }
);
