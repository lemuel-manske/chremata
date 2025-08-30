import { test, expect } from '../../../fixtures/test';

import { Title } from '../title';

test('should render title', async ({ mount, page }) => {
  await mount(<Title value="My title" />);

  const title = page.getByRole('heading', { name: 'My title' });

  await expect(title).toBeVisible();
  await expect(title).toNotHaveAccessibilityViolations();
});

test('should render title with subtitle', async ({ mount, page }) => {
  await mount(<Title value="My title" subtitleValue="My subtitle" />);

  const subtitle = page.getByRole('paragraph').filter({ hasText: 'My subtitle' });

  await expect(subtitle).toBeVisible();
  await expect(subtitle).toNotHaveAccessibilityViolations();
});

test('should render title of level [1]', async ({ mount, page }) => {
  await mount(<Title value="My title" level={1} />);

  const title = page.getByRole('heading', { name: 'My title', level: 1 });

  await expect(title).toBeVisible();
  await expect(title).toNotHaveAccessibilityViolations();
});

test('should render title of level [2]', async ({ mount, page }) => {
  await mount(<Title value="My title" level={2} />);

  const title = page.getByRole('heading', { name: 'My title', level: 2 });

  await expect(title).toBeVisible();
  await expect(title).toNotHaveAccessibilityViolations();
});

test('should render title of level [3]', async ({ mount, page }) => {
  await mount(<Title value="My title" level={3} />);

  const title = page.getByRole('heading', { name: 'My title', level: 3 });

  await expect(title).toBeVisible();
  await expect(title).toNotHaveAccessibilityViolations();
});

test('should render title of level [4]', async ({ mount, page }) => {
  await mount(<Title value="My title" level={4} />);

  const title = page.getByRole('heading', { name: 'My title', level: 4 });

  await expect(title).toBeVisible();
  await expect(title).toNotHaveAccessibilityViolations();
});

test('should render title of level [5]', async ({ mount, page }) => {
  await mount(<Title value="My title" level={5} />);

  const title = page.getByRole('heading', { name: 'My title', level: 5 });

  await expect(title).toBeVisible();
  await expect(title).toNotHaveAccessibilityViolations();
});

test('should render title of level [6]', async ({ mount, page }) => {
  await mount(<Title value="My title" level={6} />);

  const title = page.getByRole('heading', { name: 'My title', level: 6 });

  await expect(title).toBeVisible();
  await expect(title).toNotHaveAccessibilityViolations();
});
