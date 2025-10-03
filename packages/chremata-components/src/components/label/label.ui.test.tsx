import { test, expect } from '@chremata-preset/playwright/test';

import { Label } from './label';

const tag = ['@ch-label'];

test('should render a Label', { tag }, async ({ mount, page }) => {
  const label = await mount(<Label>Label</Label>);

  await expect(label).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test('should render disabled Label', { tag }, async ({ mount, page }) => {
  const label = await mount(<Label disabled>Label</Label>);

  await expect(label).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test('should render a emphasis Label', { tag }, async ({ mount, page }) => {
  const label = await mount(<Label variant="emphasis">Label</Label>);

  await expect(label).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test('should render a small Label', { tag }, async ({ mount, page }) => {
  const label = await mount(<Label size="small">Label</Label>);

  await expect(label).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test('should render a medium Label', { tag }, async ({ mount, page }) => {
  const label = await mount(<Label size="medium">Label</Label>);

  await expect(label).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test('should render a large Label', { tag }, async ({ mount, page }) => {
  const label = await mount(<Label size="large">Label</Label>);

  await expect(label).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test('should render a xlarge Label', { tag }, async ({ mount, page }) => {
  const label = await mount(<Label size="xlarge">Label</Label>);

  await expect(label).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});
