import { test, expect } from '@playwright/experimental-ct-react';

import { Icon } from '../icon/icon';

import { Button } from './button';

test(
  'should render a button',
  { tag: ['@ch-button'] },
  async ({ mount, page }) => {
    await mount(<Button label="Click me" />);

    const button = page.getByRole('button', { name: 'Click me' });

    await expect(button).toBeVisible();
  }
);

test(
  'should render a button with Icon',
  { tag: ['@ch-button'] },
  async ({ mount, page }) => {
    await mount(
      <Button label="Click me">
        <Icon
          name="CoinIconSvg"
          label=""
          primaryColor="none"
        />
      </Button>
    );

    const button = page.getByRole('button', { name: 'Click me' });

    await expect(button).toBeVisible();
  }
);

test(
  'should be focused when clicked',
  { tag: ['@ch-button'] },
  async ({ mount, page }) => {
    await mount(<Button label="Click me" />);

    const button = page.getByRole('button', { name: 'Click me' });

    await button.click();

    await expect(button).toBeFocused();
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
  }
);
