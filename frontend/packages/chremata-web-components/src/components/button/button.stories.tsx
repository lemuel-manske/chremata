import { type Meta, type StoryObj } from '@storybook/react-vite';

import { fn } from '@storybook/test';

import { Button } from './button.tsx';
import { type ButtonProps } from './button.types.ts';
import { DEFAULT_BUTTON_PROPS } from './use-button.ts';
import { CoinIcon } from '@chremata/icons';

const actions = {
  onClick: fn(),
};

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,

  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },

  args: {
    ...DEFAULT_BUTTON_PROPS,
    ...actions,
  },
};

export default meta;

export const Default: StoryObj<ButtonProps> = {
  render: (args: ButtonProps) => <Button {...args}>Button</Button>,
};

export const WithIcon: StoryObj<ButtonProps> = {
  render: (args: ButtonProps) => <CoinIcon />,
};
