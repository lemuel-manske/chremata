import { type Meta, type StoryObj } from '@storybook/react';

import { ActionList } from './action-list';

type ActionListFixtureProps = {};

function ActionListFixture(props: ActionListFixtureProps) {
  return (
    <ActionList {...props}>
      <ActionList.Item variant="secondary">Export</ActionList.Item>

      <ActionList.Item>Add</ActionList.Item>
    </ActionList>
  );
}

export default {
  id: 'ActionList',
  title: 'ActionList',

  component: ActionList,
} satisfies Meta<typeof ActionListFixture>;

export const Default: StoryObj<typeof ActionListFixture> = {
  render: (args: ActionListFixtureProps) => <ActionListFixture {...args} />,
};
