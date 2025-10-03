import { test, expect } from '@chremata-preset/playwright/test';

import { Button } from './button';

const tag = ['@ch-button'];

test('should render a labelled Button', { tag }, async ({ mount, page }) => {
  const button = await mount(
    <Button>
      <Button.Label>Click me</Button.Label>
    </Button>
  );

  await expect(button).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test(
  'should render a secondary variation Button',
  { tag },
  async ({ mount, page }) => {
    const button = await mount(
      <Button variant="secondary">
        <Button.Label>Click me</Button.Label>
      </Button>
    );

    await expect(button).toNotHaveAccessibilityViolations();
    await expect(page).toHaveScreenshot();
  }
);

test(
  'should render a secondary variation Button with an Icon on left',
  { tag },
  async ({ mount, page }) => {
    const button = await mount(
      <Button variant="secondary">
        <Button.Icon name='CoinIconSvg' />
        <Button.Label>Click me</Button.Label>
      </Button>
    );

    await expect(button).toNotHaveAccessibilityViolations();
    await expect(page).toHaveScreenshot();
  }
);

test('should render a secondary variation Button with an Icon on right', { tag }, async ({ mount, page }) => {
  const button = await mount(
    <Button variant="secondary">
      <Button.Label>Click me</Button.Label>
      <Button.Icon name='CoinIconSvg' />
    </Button>
  );

  await expect(button).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test('should render a secondary variation disabled Button', { tag }, async ({ mount, page }) => {
  const button = await mount(
    <Button variant="secondary" disabled>
      <Button.Label>Click me</Button.Label>
    </Button>
  );

  await expect(button).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test('should render a Button with Icon on left', { tag }, async ({ mount, page }) => {
  const button = await mount(
    <Button>
      <Button.Icon name='CoinIconSvg' />
      <Button.Label>Click me</Button.Label>
    </Button>
  );

  await expect(button).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test('should render a Button with Icon on right', { tag }, async ({ mount, page }) => {
  const button = await mount(
    <Button>
      <Button.Label>Click me</Button.Label>
      <Button.Icon name='CoinIconSvg' />
    </Button>
  );

  await expect(button).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});


test('should render a disabled Button', { tag }, async ({ mount, page }) => {
  const button = await mount(
    <Button disabled>
      <Button.Label>Click me</Button.Label>
    </Button>
  );

  await expect(button).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});
