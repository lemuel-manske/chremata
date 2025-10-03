import { test, expect } from '@chremata-preset/playwright/test';

import { ActionList } from './action-list';

const tag = ['@ch-action-list'];

test('should render an ActionList with no actions', { tag }, async ({ mount, page }) => {
  const actionList = await mount(
    <ActionList>
    </ActionList>
  );

  await expect(actionList).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test('should render an ActionList with one action', { tag }, async ({ mount, page }) => {
  const actionList = await mount(
    <ActionList>
      <ActionList.Item>
        <ActionList.Item.Label>Action 1</ActionList.Item.Label>
      </ActionList.Item>
    </ActionList>
  );

  await expect(actionList).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test('should render an ActionList with multiple actions', { tag }, async ({ mount, page }) => {
  const actionList = await mount(
    <ActionList>
      <ActionList.Item>
        <ActionList.Item.Label>Action 1</ActionList.Item.Label>
      </ActionList.Item>

      <ActionList.Item>
        <ActionList.Item.Label>Action 2</ActionList.Item.Label>
      </ActionList.Item>

      <ActionList.Item>
        <ActionList.Item.Label>Action 3</ActionList.Item.Label>
      </ActionList.Item>
    </ActionList>
  );

  await expect(actionList).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test('should render an ActionList with a disabled action', { tag }, async ({ mount, page }) => {
  const actionList = await mount(
    <ActionList>
      <ActionList.Item>
        <ActionList.Item.Label>Action 1</ActionList.Item.Label>
      </ActionList.Item>

      <ActionList.Item disabled>
        <ActionList.Item.Label>Action 2</ActionList.Item.Label>
      </ActionList.Item>
    </ActionList>
  );

  await expect(actionList).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});
