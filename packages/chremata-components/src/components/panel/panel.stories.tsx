import { type Meta, type StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import { Panel } from './panel';
import type { PanelProps } from './panel.types';

import { type TableProps } from '../table/table.types';

type PanelFixtureProps = PanelProps &
  TableProps & {
    onAdd: () => void;
    title: string;
  };

function PanelFixture(props: PanelFixtureProps) {
  const { data, title, onAdd, ...rest } = props;

  return (
    <Panel {...rest}>
      <Panel.Header>
        <Panel.Title>{title}</Panel.Title>

        <Panel.ActionList>
          <Panel.ActionItem onClick={onAdd}>Add</Panel.ActionItem>
        </Panel.ActionList>
      </Panel.Header>

      <Panel.Table data={data}>
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
}

export default {
  id: 'Panel',
  title: 'Panel',

  component: PanelFixture,

  args: {
    title: 'Users',

    data: [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 },
      { name: 'Charlie', age: 35 },
    ],

    onAdd: fn(),
  },

  argTypes: {
    title: {
      control: 'text',
    },

    data: {
      control: 'object',
    },

    onAdd: { action: 'add' },
  },
} as Meta<PanelFixtureProps>;

export const Default: StoryObj<PanelFixtureProps> = {
  render: (args: PanelFixtureProps) => <PanelFixture {...args} />,
};
