import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { ChButton } from '../..';

export default {
  component: 'ch-button',
  id: 'Button',
  title: 'Button',
} as Meta<typeof ChButton>;

export const Default: StoryObj<typeof ChButton> = {
  render: () => `<ch-button>Button</ch-button>`,
};
