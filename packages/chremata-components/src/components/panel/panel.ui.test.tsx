import { test, expect } from '@chremata-preset/playwright/test';

import { Panel } from './panel';
import { ActionList } from '../action-list/action-list';

const tag = ['@ch-panel'];

test('should render a Panel without actions', { tag }, async ({ mount, page }) => {
  const panel = await mount(
    <Panel>
      <Panel.Header>
        <Panel.Title>Users</Panel.Title>
      </Panel.Header>

      <Panel.Table data={[
        { name: 'Jane Doe', age: 32 },
        { name: 'John Doe', age: 28 }
      ]}>
        <Panel.TableColumn
          accessorKey="name"
          sortable
          width={240}>
          <Panel.TableColumnHeader>Name</Panel.TableColumnHeader>
          <Panel.TableCell />
        </Panel.TableColumn>

        <Panel.TableColumn
          accessorKey="age"
          sortable
          width={120}>
          <Panel.TableColumnHeader>Age</Panel.TableColumnHeader>
          <Panel.TableCell />
        </Panel.TableColumn>
      </Panel.Table>
    </Panel>
  );

  await expect(panel).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test('should render a Panel with actions', { tag }, async ({ mount, page }) => {
  const panel = await mount(
    <Panel>
      <Panel.Header>
        <Panel.Title>Users</Panel.Title>

        <ActionList>
          <ActionList.Item>
            <ActionList.Item.Label>Add</ActionList.Item.Label>
          </ActionList.Item>
        </ActionList>
      </Panel.Header>

      <Panel.Table data={[
        { name: 'Jane Doe', age: 32 },
        { name: 'John Doe', age: 28 }
      ]}>
        <Panel.TableColumn
          accessorKey="name"
          sortable
          width={240}>
          <Panel.TableColumnHeader>Name</Panel.TableColumnHeader>
          <Panel.TableCell />
        </Panel.TableColumn>

        <Panel.TableColumn
          accessorKey="age"
          sortable
          width={120}>
          <Panel.TableColumnHeader>Age</Panel.TableColumnHeader>
          <Panel.TableCell />
        </Panel.TableColumn>
      </Panel.Table>
    </Panel>
  );

  await expect(panel).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test('should render an empty Panel', { tag }, async ({ mount, page }) => {
  const panel = await mount(
    <Panel>
      <Panel.Header>
        <Panel.Title>Users</Panel.Title>
      </Panel.Header>

      <Panel.Table data={[]}>
        <Panel.TableColumn
          accessorKey="name"
          sortable
          width={240}>
          <Panel.TableColumnHeader>Name</Panel.TableColumnHeader>
          <Panel.TableCell />
        </Panel.TableColumn>

        <Panel.TableColumn
          accessorKey="age"
          sortable
          width={120}>
          <Panel.TableColumnHeader>Age</Panel.TableColumnHeader>
          <Panel.TableCell />
        </Panel.TableColumn>
      </Panel.Table>
    </Panel>
  );

  await expect(panel).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});
