import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Button } from './button';

const onClick = fn(() => {
  console.log('[onClick] dispatched');
});

export default {
  args: { label: 'Button', onClick },
  component: Button,
  title: 'Button',
  id: 'button',
} satisfies Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  render: (props) => <Button {...props} />,
};
