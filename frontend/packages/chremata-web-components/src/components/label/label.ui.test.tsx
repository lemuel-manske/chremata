import { test, expect } from '@chremata-preset/playwright/test';

import { Label } from './label';

test(
  'should render a Label',
  { tag: ['@ch-label'] },
  async ({ mount, page }) => {
    await mount(<Label>Label</Label>);

    const label = page.getByText('Label');

    await expect(label).toNotHaveAccessibilityViolations();
  }
);

test('should render disabled Label', async ({ mount, page }) => {
  await mount(<Label disabled>Label</Label>);

  const label = page.getByText('Label');

  await expect(label).toNotHaveAccessibilityViolations();
});

test('should render a emphasis Label', async ({ mount, page }) => {
  await mount(<Label variant="emphasis">Label</Label>);

  const label = page.getByText('Label');

  await expect(label).toNotHaveAccessibilityViolations();
});

test('should render a small Label', async ({ mount, page }) => {
  await mount(<Label size="small">Label</Label>);

  const label = page.getByText('Label');

  await expect(label).toNotHaveAccessibilityViolations();
});

test('should render a medium Label', async ({ mount, page }) => {
  await mount(<Label size="medium">Label</Label>);

  const label = page.getByText('Label');

  await expect(label).toNotHaveAccessibilityViolations();
});

test('should render a large Label', async ({ mount, page }) => {
  await mount(<Label size="large">Label</Label>);

  const label = page.getByText('Label');

  await expect(label).toNotHaveAccessibilityViolations();
});

test('should render a xlarge Label', async ({ mount, page }) => {
  await mount(<Label size="xlarge">Label</Label>);

  const label = page.getByText('Label');

  await expect(label).toNotHaveAccessibilityViolations();
});
