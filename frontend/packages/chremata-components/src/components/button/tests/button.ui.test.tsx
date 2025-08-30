import { test, expect } from '../../../fixtures/test';

import { Button } from '../button';

test('should render active', async ({ mount, page }) => {
  mount(<Button label="Active button" />);

  const button = page.getByRole('button');

  await expect(button).toNotHaveAccessibilityViolations();
});

test('should render with label', async ({ mount, page }) => {
  mount(<Button label="With label" />);

  const button = page.getByRole('button', { name: 'With label' });

  await expect(button).toHaveText('With label');

  await expect(button).toNotHaveAccessibilityViolations();
});

test('should be focusable', async ({ mount, page }) => {
  mount(<Button label="Focusable button" />);

  const button = page.getByRole('button', { name: 'Focusable button' });

  button.focus();

  await expect(button).toBeFocused();

  await expect(button).toNotHaveAccessibilityViolations();
});

test('should render disabled', async ({ mount, page }) => {
  mount(<Button label="Disabled button" disabled />);

  const button = page.getByRole('button');

  await expect(button).toBeEnabled({ enabled: false });

  await expect(button).toNotHaveAccessibilityViolations();
});

test('should not be focusable when disabled', async ({ mount, page }) => {
  mount(<Button label="Disabled button" disabled />);

  const button = page.getByRole('button', { name: 'Disabled button' });

  button.focus();

  await expect(button).not.toBeFocused();

  await expect(button).toNotHaveAccessibilityViolations();
});
