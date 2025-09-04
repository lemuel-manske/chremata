import { html } from 'lit';

import type { StoryObj } from '@storybook/web-components';

import './index.js';

export default {
  component: 'ch-icon',
  id: 'Icon',
  title: 'Icon',
};

export const Solid: StoryObj = {
  render: () => html`<ch-coin-icon />`,
};
