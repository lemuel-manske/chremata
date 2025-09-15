import { type Meta, type StoryObj } from '@storybook/react';

import { type TableProps } from './table.types';
import { Table } from './table';

export default {
  id: 'Table',
  title: 'Table',

  component: Table,

  args: {
    caption: 'Users',

    columns: [
      { key: 'name', label: 'Name' },
      { key: 'age', label: 'Age' },
      { key: 'email', label: 'Email' },
    ],

    data: [
      { name: 'John Doe', age: 28, email: 'johndoe@email.com' },
      { name: 'Jane Smith', age: 34, email: 'janesmith@email.com' },
    ],
  },
} satisfies Meta<typeof Table>;

export const Default: StoryObj<TableProps> = {
  render: (args: TableProps) => <Table {...args} />,
};
