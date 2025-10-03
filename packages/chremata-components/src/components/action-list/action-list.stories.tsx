import { type Meta, type StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import { type IconSolidNames } from '../icon/icon.types';

import { ActionList } from './action-list';

type ActionListFixtureProps = {
  addIcon: IconSolidNames;
  exportIcon: IconSolidNames;

  onClickAdd?: () => void;
  onClickExport?: () => void;
};

function ActionListFixture(props: ActionListFixtureProps) {
  const { addIcon, exportIcon, onClickAdd, onClickExport } = props;
  
  return (
    <ActionList {...props}>
      <ActionList.Item variant="secondary" onClick={onClickExport}>
        <ActionList.Item.Icon name={exportIcon} />
        <ActionList.Item.Label>Export</ActionList.Item.Label>
      </ActionList.Item>

      <ActionList.Item onClick={onClickAdd}>
        <ActionList.Item.Icon name={addIcon} />
        <ActionList.Item.Label>Add</ActionList.Item.Label>
      </ActionList.Item>
    </ActionList>
  );
}

export default {
  id: 'ActionList',
  title: 'ActionList',

  component: ActionList,

  argTypes: {
    addIcon: { control: 'text' },
    exportIcon: { control: 'text' },
    onClickAdd: { action: 'clicked' },
    onClickExport: { action: 'clicked' },
  },

  args: {
    addIcon: 'CoinIconSvg',
    exportIcon: 'ChevronDownSvg',

    onClickAdd: fn(),
    onClickExport: fn(),
  },
} satisfies Meta<typeof ActionListFixture>;

export const Default: StoryObj<typeof ActionListFixture> = {
  render: (args: ActionListFixtureProps) => <ActionListFixture {...args} />,
};
