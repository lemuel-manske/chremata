import { test, expect } from '@chremata-preset/playwright/test';

import { Label } from './label';

const tag = ['@ch-label'];

test('should render a Label', { tag }, async ({ mount, page }) => {
  await mount(<Label>Label</Label>);

  const label = page.getByText('Label');

  await expect(label).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test('should render disabled Label', { tag }, async ({ mount, page }) => {
  await mount(<Label disabled>Label</Label>);

  const label = page.getByText('Label');

  await expect(label).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test('should render a emphasis Label', { tag }, async ({ mount, page }) => {
  await mount(<Label variant="emphasis">Label</Label>);

  const label = page.getByText('Label');

  await expect(label).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test('should render a small Label', { tag }, async ({ mount, page }) => {
  await mount(<Label size="small">Label</Label>);

  const label = page.getByText('Label');

  await expect(label).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test('should render a medium Label', { tag }, async ({ mount, page }) => {
  await mount(<Label size="medium">Label</Label>);

  const label = page.getByText('Label');

  await expect(label).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test('should render a large Label', { tag }, async ({ mount, page }) => {
  await mount(<Label size="large">Label</Label>);

  const label = page.getByText('Label');

  await expect(label).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test('should render a xlarge Label', { tag }, async ({ mount, page }) => {
  await mount(<Label size="xlarge">Label</Label>);

  const label = page.getByText('Label');

  await expect(label).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test('should render a Label with Icon', { tag }, async ({ mount, page }) => {
  await mount(
    <Label>
      <Label.Icon name="CoinIconSvg" />
      Label
    </Label>
  );

  const label = page.getByText('Label');

  await expect(label).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});
