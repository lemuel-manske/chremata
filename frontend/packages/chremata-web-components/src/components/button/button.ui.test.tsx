import { test, expect } from '@chremata-preset/playwright/test';

import { Icon } from '../icon/icon';

import { Button } from './button';

test(
  'should render a button',
  { tag: ['@ch-button'] },
  async ({ mount, page }) => {
    await mount(<Button label="Click me" />);

    const button = page.getByRole('button', { name: 'Click me' });

    await expect(button).toNotHaveAccessibilityViolations();
  }
);

test('should render a secondary variation button', async ({ mount, page }) => {
  await mount(
    <Button
      label="Click me"
      variant="secondary"
    />
  );

  const button = page.getByRole('button', { name: 'Click me' });

  await expect(button).toNotHaveAccessibilityViolations();
});

test('should render a secondary variation button with an Icon', async ({
  mount,
  page,
}) => {
  await mount(
    <Button
      label="Click me"
      variant="secondary">
      <Icon
        name="CoinIconSvg"
        label="Coin"
        primaryColor="currentColor"
      />
    </Button>
  );

  const button = page.getByRole('button', { name: 'Click me' });

  await expect(button).toNotHaveAccessibilityViolations();
});

test(
  'should render a button with Icon',
  { tag: ['@ch-button'] },
  async ({ mount, page }) => {
    await mount(
      <Button label="Click me">
        <Icon
          name="CoinIconSvg"
          label="Coin"
          primaryColor="currentColor"
        />
      </Button>
    );

    const button = page.getByRole('button', { name: 'Click me' });

    await expect(button).toNotHaveAccessibilityViolations();
  }
);

test(
  'should be focused when clicked',
  { tag: ['@ch-button'] },
  async ({ mount, page }) => {
    await mount(<Button label="Click me" />);

    const button = page.getByRole('button', { name: 'Click me' });

    await button.click();

    await expect(button).toNotHaveAccessibilityViolations();
  }
);

test(
  'should render a disabled button',
  { tag: ['@ch-button'] },
  async ({ mount, page }) => {
    await mount(
      <Button
        disabled
        label="Click me"
      />
    );

    const button = page.getByRole('button', { name: 'Click me' });

    await expect(button).toBeDisabled();
    await expect(button).toNotHaveAccessibilityViolations();
  }
);

test(
  'should be focused when [Tab] and [Enter] are pressed',
  { tag: ['@ch-button'] },
  async ({ mount, page }) => {
    await mount(<Button label="Click me" />);

    const button = page.getByRole('button', { name: 'Click me' });

    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

    await expect(button).toBeFocused();
    await expect(button).toNotHaveAccessibilityViolations();
  }
);

test(
  'should be focused when [Tab] and [Space] are pressed',
  { tag: ['@ch-button'] },
  async ({ mount, page }) => {
    await mount(<Button label="Click me" />);

    const button = page.getByRole('button', { name: 'Click me' });

    await page.keyboard.press('Tab');
    await page.keyboard.press('Space');

    await expect(button).toBeFocused();
    await expect(button).toNotHaveAccessibilityViolations();
  }
);
