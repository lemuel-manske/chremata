import { test, expect } from '@chremata-preset/playwright/test';

import { Table } from './table';

const tag = ['@ch-table'];

test('should render a Table', { tag }, async ({ mount, page }) => {
  const table = await mount(
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

  await expect(table).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test('should render a sortable Table', { tag }, async ({ mount, page }) => {
  const table = await mount(
    <Table
      label="Sortable Table"
      data={[
        { name: 'Alice', age: 30, country: 'USA' },
        { name: 'Bob', age: 25, country: 'Canada' },
        { name: 'Charlie', age: 35, country: 'UK' },
      ]}>
      <Table.Column
        accessorKey="name"
        sortable>
        <Table.ColumnHeader>Name</Table.ColumnHeader>
        <Table.Cell />
      </Table.Column>

      <Table.Column
        accessorKey="age"
        sortable>
        <Table.ColumnHeader>Age</Table.ColumnHeader>
        <Table.Cell />
      </Table.Column>

      <Table.Column accessorKey="country">
        <Table.ColumnHeader>Country</Table.ColumnHeader>
        <Table.Cell />
      </Table.Column>
    </Table>
  );

  await expect(table).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test('should sort Table ascending', { tag }, async ({ mount, page }) => {
  const table = await mount(
    <Table
      label="Sortable Table"
      data={[
        { name: 'Alice', age: 30, country: 'USA' },
        { name: 'Bob', age: 25, country: 'Canada' },
        { name: 'Charlie', age: 35, country: 'UK' },
      ]}>
      <Table.Column accessorKey="name">
        <Table.ColumnHeader>Name</Table.ColumnHeader>
        <Table.Cell />
      </Table.Column>

      <Table.Column
        accessorKey="age"
        sortable>
        <Table.ColumnHeader>Age</Table.ColumnHeader>
        <Table.Cell />
      </Table.Column>

      <Table.Column accessorKey="country">
        <Table.ColumnHeader>Country</Table.ColumnHeader>
        <Table.Cell />
      </Table.Column>
    </Table>
  );

  const ageColumn = table.getByRole('columnheader', { name: 'Age' });

  await ageColumn.click();

  await expect(page).toHaveScreenshot();
});

test('should sort Table descending', { tag }, async ({ mount, page }) => {
  const table = await mount(
    <Table
      label="Sortable Table"
      data={[
        { name: 'Alice', age: 30, country: 'USA' },
        { name: 'Bob', age: 25, country: 'Canada' },
        { name: 'Charlie', age: 35, country: 'UK' },
      ]}>
      <Table.Column accessorKey="name">
        <Table.ColumnHeader>Name</Table.ColumnHeader>
        <Table.Cell />
      </Table.Column>

      <Table.Column
        accessorKey="age"
        sortable>
        <Table.ColumnHeader>Age</Table.ColumnHeader>
        <Table.Cell />
      </Table.Column>

      <Table.Column accessorKey="country">
        <Table.ColumnHeader>Country</Table.ColumnHeader>
        <Table.Cell />
      </Table.Column>
    </Table>
  );

  const ageColumn = table.getByRole('columnheader', { name: 'Age' });

  await ageColumn.click();
  await ageColumn.click();

  await expect(page).toHaveScreenshot();
});

test('should render a Table with no data', { tag }, async ({ mount, page }) => {
  const table = await mount(
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

  await expect(table).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});
