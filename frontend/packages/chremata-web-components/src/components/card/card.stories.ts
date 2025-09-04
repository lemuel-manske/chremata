import { html } from 'lit';

import type { Meta, StoryObj } from '@storybook/web-components';

import './card';

export default {
  component: 'ch-card',
  id: 'Card',
  title: 'Card',

  args: {
    title: 'Card title',
    subtitle: 'Subtitle',
  },
} as Meta;

export const Default: StoryObj = {
  render: (args) => html`<ch-card>
    <ch-card-header slot="header" .title=${args.title} .subtitle=${args.subtitle} />
  </ch-card>`,
};

export const WithIcon: StoryObj = {
  render: (args) => html`<ch-card>
    <ch-card-header slot="header" .title=${args.title} .subtitle=${args.subtitle}>
      <ch-coin-icon slot="icon" .color=${'var(--gs-20)'} />
    </ch-card-header>
  </ch-card>`,
};
