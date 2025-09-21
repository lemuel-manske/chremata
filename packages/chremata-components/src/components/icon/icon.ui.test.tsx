import { test, expect } from '@chremata-preset/playwright/test';

import { Icon } from './icon';

const tag = ['@ch-icon'];

test('should render an Icon', { tag }, async ({ mount, page }) => {
  await mount(
    <Icon
      name="CoinIconSvg"
      primaryColor="white"
      label="Coin icon"
    />
  );

  const icon = page.getByRole('img', { name: 'Coin icon' });

  await expect(icon).toNotHaveAccessibilityViolations();
});

test('should render a disabled Icon', { tag }, async ({ mount, page }) => {
  await mount(
    <Icon
      name="CoinIconSvg"
      primaryColor="white"
      primaryColorDisabled="gray"
      disabled
      label="Coin icon"
    />
  );

  const icon = page.getByRole('img', { name: 'Coin icon' });

  await expect(icon).toNotHaveAccessibilityViolations();
});

test('should render a small Icon', { tag }, async ({ mount, page }) => {
  await mount(
    <Icon
      name="CoinIconSvg"
      primaryColor="white"
      size="small"
      label="Coin icon"
    />
  );

  const icon = page.getByRole('img', { name: 'Coin icon' });

  await expect(icon).toNotHaveAccessibilityViolations();
});

test('should render a medium Icon', { tag }, async ({ mount, page }) => {
  await mount(
    <Icon
      name="CoinIconSvg"
      primaryColor="white"
      size="medium"
      label="Coin icon"
    />
  );

  const icon = page.getByRole('img', { name: 'Coin icon' });

  await expect(icon).toNotHaveAccessibilityViolations();
});

test('should render a large Icon', { tag }, async ({ mount, page }) => {
  await mount(
    <Icon
      name="CoinIconSvg"
      primaryColor="white"
      size="large"
      label="Coin icon"
    />
  );

  const icon = page.getByRole('img', { name: 'Coin icon' });

  await expect(icon).toNotHaveAccessibilityViolations();
});

test('should render an xlarge Icon', { tag }, async ({ mount, page }) => {
  await mount(
    <Icon
      name="CoinIconSvg"
      primaryColor="white"
      size="xlarge"
      label="Coin icon"
    />
  );

  const icon = page.getByRole('img', { name: 'Coin icon' });

  await expect(icon).toNotHaveAccessibilityViolations();
});
