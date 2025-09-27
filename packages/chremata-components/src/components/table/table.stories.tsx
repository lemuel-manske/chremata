import { type Meta, type StoryObj } from '@storybook/react';

import { Money } from '../money/money';

import { type TableProps } from './table.types';
import { Table } from './table';

function TableContainer({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default {
  id: 'Table',
  title: 'Table',

  component: Table,

  args: {
    label: 'Sample',

    data: [
      { name: 'John Doe', age: 28, email: 'johndoe@email.com', salary: 75000 },
      {
        name: 'Jane Smith',
        age: 34,
        email: 'janesmith@email.com',
        salary: 82000,
      },
      {
        name: 'Alice Johnson',
        age: 29,
        email: 'alice.johnson@email.com',
        salary: 68000,
      },
      {
        name: 'Bob Williams',
        age: 41,
        email: 'bob.williams@email.com',
        salary: 95000,
      },
    ],
  },
} satisfies Meta<typeof Table>;

export const Default: StoryObj<typeof Table> = {
  render: (args: TableProps) => (
    <TableContainer>
      <Table {...args}>
        <Table.Column
          accessorKey="name"
          width={240}>
          <Table.ColumnHeader>Name</Table.ColumnHeader>
          <Table.Cell />
        </Table.Column>

        <Table.Column
          accessorKey="age"
          width={120}>
          <Table.ColumnHeader>Age</Table.ColumnHeader>
          <Table.Cell />
        </Table.Column>

        <Table.Column
          accessorKey="email"
          width={360}>
          <Table.ColumnHeader>Email</Table.ColumnHeader>
          <Table.Cell />
        </Table.Column>
      </Table>
    </TableContainer>
  ),
};

export const Sortable: StoryObj<typeof Table> = {
  render: (args: TableProps) => (
    <TableContainer>
      <Table {...args}>
        <Table.Column
          accessorKey="name"
          width={240}
          sortable>
          <Table.ColumnHeader>Name</Table.ColumnHeader>
          <Table.Cell />
        </Table.Column>

        <Table.Column
          accessorKey="age"
          width={120}
          sortable>
          <Table.ColumnHeader>Age</Table.ColumnHeader>
          <Table.Cell />
        </Table.Column>

        <Table.Column
          accessorKey="salary"
          width={160}
          sortable>
          <Table.ColumnHeader>Salary</Table.ColumnHeader>
          <Table.Cell>
            {({ value }) => <Money amount={value as number} />}
          </Table.Cell>
        </Table.Column>

        <Table.Column
          accessorKey="email"
          width={360}>
          <Table.ColumnHeader>Email</Table.ColumnHeader>
          <Table.Cell />
        </Table.Column>
      </Table>
    </TableContainer>
  ),
};
