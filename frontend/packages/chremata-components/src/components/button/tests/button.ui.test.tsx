import { test, expect } from '../../../fixtures/test';

import { Button } from '../button';

test('should render active', async ({ mount, page }) => {
  mount(<Button label="Active button" />);

  const button = page.getByRole('button');

  await expect(button).toNotHaveAccessibilityViolations();
});

test('should render disabled', async ({ mount, page }) => {
  mount(<Button disabled />);

  const button = page.getByRole('button');

  await expect(button).toNotHaveAccessibilityViolations();
});

test('should not be focused on press [Tab] when disabled', async ({ mount, page }) => {
  mount(<Button label="Disabled button" disabled />);

  const button = page.getByRole('button');

  await expect(button).toBeEnabled({ enabled: false });

  await expect(button).toNotHaveAccessibilityViolations();
});
