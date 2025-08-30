import { test, expect } from '../../../fixtures/test';

import { Text } from '../text';

const TAGS = ['@text'];

test('should render regular text', { tag: TAGS }, async ({ mount, page }) => {
  await mount(<Text value="Regular text" />);

  const text = page.getByText('Regular text');

  await expect(text).toBeVisible();
  await expect(text).toNotHaveAccessibilityViolations();
});

test('should render with additional classes', { tag: TAGS }, async ({ mount, page }) => {
  await mount(<Text value="Regular text" className="extra-class" />);

  const text = page.getByText('Regular text');

  await expect(text).toBeVisible();
  await expect(text).toHaveClass(/extra-class/);
});
