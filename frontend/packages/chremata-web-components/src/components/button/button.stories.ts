import { html } from 'lit';

import type { Meta, StoryObj } from '@storybook/web-components';

import { fn } from '@storybook/test';

import { DEFAULT_PROPS, type ButtonProps } from './button';

export default {
  component: 'ch-button',
  id: 'Button',
  title: 'Button',

  args: {
    ...DEFAULT_PROPS,
    onClick: fn(),
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {
  render: (args) =>
    html`<ch-button .label=${args.label} .disabled=${args.disabled} @onClick=${args.onClick}></ch-button>`,
};
