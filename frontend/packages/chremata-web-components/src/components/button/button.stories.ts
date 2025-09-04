import { html } from 'lit';

import type { Meta, StoryObj } from '@storybook/web-components';

import { fn } from '@storybook/test';

import { DEFAULT_PROPS, type ButtonProps } from './button.js';
import { IconSize } from '@chremata/icons';

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
    html`<ch-button .label=${args.label} .disabled=${args.disabled} @ch-button:click=${args.onClick}></ch-button>`,
};

export const WithIcon: StoryObj<ButtonProps> = {
  render: (args) => html`<ch-button .disabled=${args.disabled} @ch-button:click=${args.onClick}>
    <ch-coin-icon .size=${IconSize.SMALL}><span slot="label">${args.label}</span></ch-coin-icon>
  </ch-button>`,
};
