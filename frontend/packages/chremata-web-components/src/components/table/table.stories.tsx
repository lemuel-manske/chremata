import { type Meta, type StoryObj } from '@storybook/react';

import { TableWithData } from './table.fixture';
import { type TableProps } from './table.types';

export default {
  id: 'Table',
  title: 'Table',

  component: TableWithData,
} satisfies Meta<TableProps>;

export const WithData: StoryObj<TableProps> = {
  render: (args: TableProps) => <TableWithData {...args} />,
};
