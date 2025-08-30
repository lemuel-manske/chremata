import { test, expect } from '../../../fixtures/test';

import { Title } from '../title';

const TAGS = ['@title'];

test('should render title', { tag: TAGS }, async ({ mount, page }) => {
  await mount(<Title value="My title" />);

  const title = page.getByRole('heading', { name: 'My title' });

  await expect(title).toBeVisible();
  await expect(title).toNotHaveAccessibilityViolations();
});

test('should render title with subtitle', { tag: TAGS }, async ({ mount, page }) => {
  await mount(<Title value="My title" subtitleValue="My subtitle" />);

  const subtitle = page.getByRole('paragraph').filter({ hasText: 'My subtitle' });

  await expect(subtitle).toBeVisible();
  await expect(subtitle).toNotHaveAccessibilityViolations();
});

test('should render title of level [1]', { tag: TAGS }, async ({ mount, page }) => {
  await mount(<Title value="My title" level={1} />);

  const title = page.getByRole('heading', { name: 'My title', level: 1 });

  await expect(title).toBeVisible();
  await expect(title).toNotHaveAccessibilityViolations();
});

test('should render title of level [2]', { tag: TAGS }, async ({ mount, page }) => {
  await mount(<Title value="My title" level={2} />);

  const title = page.getByRole('heading', { name: 'My title', level: 2 });

  await expect(title).toBeVisible();
  await expect(title).toNotHaveAccessibilityViolations();
});
