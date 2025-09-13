import type { Meta, StoryObj } from '@storybook/react';

import { CardFixture } from './card.fixture';

import './index.css';

export default {
  id: 'Card',
  title: 'Card',

  component: CardFixture,

  args: {
    title: 'Card title',
    subtitle: 'Card subtitle',
    content: 'Lorem ipsum dolor...',
  },
} satisfies Meta<typeof CardFixture>;

export const Default: StoryObj<typeof CardFixture> = {
  render: args => <CardFixture {...args} />,
};
