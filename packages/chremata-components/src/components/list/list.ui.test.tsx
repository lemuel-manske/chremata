import { test, expect } from '@chremata-preset/playwright/test';

import { Label } from '../label/label';

import { List } from './list';

const tag = ['@ch-list'];

test(
  'should render a vertical List with items',
  { tag },
  async ({ mount, page }) => {
    const list = await mount(
      <List orientation="vertical">
        <List.Item>
          <Label>Item 1</Label>
        </List.Item>

        <List.Item>
          <Label>Item 2</Label>
        </List.Item>

        <List.Item>
          <Label>Item 3</Label>
        </List.Item>
      </List>
    );

    await expect(list).toNotHaveAccessibilityViolations();
    await expect(page).toHaveScreenshot();
  }
);

test(
  'should render a horizontal List with items',
  { tag },
  async ({ mount, page }) => {
    const list = await mount(
      <List orientation="horizontal">
        <List.Item>
          <Label>Item 1</Label>
        </List.Item>

        <List.Item>
          <Label>Item 2</Label>
        </List.Item>

        <List.Item>
          <Label>Item 3</Label>
        </List.Item>
      </List>
    );

    await expect(list).toNotHaveAccessibilityViolations();
    await expect(page).toHaveScreenshot();
  }
);

test(
  'should render a List with small gap',
  { tag },
  async ({ mount, page }) => {
    const list = await mount(
      <List gap="small">
        <List.Item>
          <Label>Item 1</Label>
        </List.Item>

        <List.Item>
          <Label>Item 2</Label>
        </List.Item>

        <List.Item>
          <Label>Item 3</Label>
        </List.Item>
      </List>
    );

    await expect(list).toNotHaveAccessibilityViolations();
    await expect(page).toHaveScreenshot();
  }
);

test(
  'should render a List with xsmall gap',
  { tag },
  async ({ mount, page }) => {
    const list = await mount(
      <List gap="xsmall">
        <List.Item>
          <Label>Item 1</Label>
        </List.Item>

        <List.Item>
          <Label>Item 2</Label>
        </List.Item>

        <List.Item>
          <Label>Item 3</Label>
        </List.Item>
      </List>
    );

    await expect(list).toNotHaveAccessibilityViolations();
    await expect(page).toHaveScreenshot();
  }
);

test(
  'should render a List labelled by a Label',
  { tag },
  async ({ mount, page }) => {
    const list = await mount(
      <>
        <Label id="list-label">List Label</Label>

        <List labelledBy="list-label">
          <List.Item>
            <Label>Item 1</Label>
          </List.Item>

          <List.Item>
            <Label>Item 2</Label>
          </List.Item>

          <List.Item>
            <Label>Item 3</Label>
          </List.Item>
        </List>
      </>
    );

    await expect(list).toNotHaveAccessibilityViolations();
    await expect(page).toHaveScreenshot();
  }
);

test(
  'should render a List with nested elements',
  { tag },
  async ({ mount, page }) => {
    const list = await mount(
      <List>
        <List.Item>
          <List
            orientation="horizontal"
            gap="small">
            <List.Item>
              <Label>Nested Item 1</Label>
            </List.Item>

            <List.Item>
              <Label>Nested Item 2</Label>
            </List.Item>
          </List>{' '}
        </List.Item>

        <List.Item>
          <Label>Item 2</Label>
        </List.Item>
      </List>
    );

    await expect(list).toNotHaveAccessibilityViolations();
    await expect(page).toHaveScreenshot();
  }
);
