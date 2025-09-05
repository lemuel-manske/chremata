import { type Meta, type StoryObj } from '@storybook/react-vite';

import { fn } from '@storybook/test';

import { Button } from './button.tsx';
import type { ButtonProps } from './button.types.ts';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,

  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },

  args: {
    label: 'Click me',
    disabled: false,
    onClick: () => fn(),
  },
};

export default meta;

export const Default: StoryObj<ButtonProps> = {
  args: {
    label: 'Click me',
    disabled: false,
  },

  render: (args: ButtonProps) => <Button {...args} />,
};
