import { html } from 'lit';

import type { Meta, StoryObj } from '@storybook/web-components';

import { DEFAULT_PROPS, type CardProps } from './card';

export default {
  component: 'ch-card',
  id: 'Card',
  title: 'Card',

  args: {
    ...DEFAULT_PROPS,
  },
} as Meta<CardProps>;

export const Default: StoryObj<CardProps> = {
  render: (args) => html`<ch-card .title=${args.title} />`,
};
