import { expect, jest, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Table } from './table';

test('should sort sortable table using default strategy', async () => {
  const user = userEvent.setup();

  render(
    <Table
      label="Sortable Table"
      data={[
        { name: 'Alice', age: 30, country: 'USA' },
        { name: 'Bob', age: 25, country: 'Canada' },
        { name: 'Charlie', age: 35, country: 'UK' },
      ]}>
      <Table.Column accessorKey="name" sortable>
        <Table.ColumnHeader>Name</Table.ColumnHeader>
        <Table.Cell />
      </Table.Column>

      <Table.Column accessorKey="age" sortable>
        <Table.ColumnHeader>Age</Table.ColumnHeader>
        <Table.Cell />
      </Table.Column>

      <Table.Column accessorKey="country">
        <Table.ColumnHeader>Country</Table.ColumnHeader>
        <Table.Cell />
      </Table.Column>
    </Table>
  );

  const nameHeader = screen.getByRole('button', { name: 'Name' });
  const ageHeader = screen.getByRole('button', { name: 'Age' });

  