import { test, expect } from '@chremata-preset/playwright/test';

import { Table } from './table';

const tag = ['@ch-table'];

test('should render a Table', { tag }, async ({ mount, page }) => {
  await mount(
    <Table
      label="Sample Table"
      data={[
        { name: 'Alice', age: 30, country: 'USA' },
        { name: 'Bob', age: 25, country: 'Canada' },
      ]}>
      <Table.Column accessorKey="name">
        <Table.ColumnHeader>Name</Table.ColumnHeader>
        <Table.Cell />
      </Table.Column>

      <Table.Column accessorKey="age">
        <Table.ColumnHeader>Age</Table.ColumnHeader>
        <Table.Cell />
      </Table.Column>

      <Table.Column accessorKey="country">
        <Table.ColumnHeader>Country</Table.ColumnHeader>
        <Table.Cell />
      </Table.Column>
    </Table>
  );

  const table = page.getByRole('grid', { name: 'Sample Table' });

  const rows = table.getByRole('row');

  await expect(rows).toHaveCount(3);

  await expect(table).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test('should render a Table with no data', { tag }, async ({ mount, page }) => {
  await mount(
    <Table
      label="Empty Table"
      data={[]}>
      <Table.Column accessorKey="name">
        <Table.ColumnHeader>Name</Table.ColumnHeader>
        <Table.Cell />
      </Table.Column>

      <Table.Column accessorKey="age">
        <Table.ColumnHeader>Age</Table.ColumnHeader>
        <Table.Cell />
      </Table.Column>

      <Table.Column accessorKey="country">
        <Table.ColumnHeader>Country</Table.ColumnHeader>
        <Table.Cell />
      </Table.Column>
    </Table>
  );

  const table = page.getByRole('grid', { name: 'Empty Table' });

  await expect(table).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});
