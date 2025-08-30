import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Button } from './button';

export default {
  args: { label: 'Button', onClick: fn() },
  component: Button,
  title: 'Button',
  id: 'button',
} satisfies Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  render: (props) => <Button {...props} />,
};
