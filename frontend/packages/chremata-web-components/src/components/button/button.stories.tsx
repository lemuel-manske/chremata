import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from '@storybook/test';

import { DEFAULT_BUTTON_PROPS } from './use-button';
import { ButtonWithIcon, type ButtonWithIconProps } from './button.fixture';

export default {
  id: 'Button',
  title: 'Button',

  component: ButtonWithIcon,

  argTypes: {
    label: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    onClick: {
      action: 'clicked',
    },
  },

  args: {
    ...DEFAULT_BUTTON_PROPS,
    label: 'Button',
    onClick: fn(),
  },
} as Meta<typeof ButtonWithIcon>;

export const Default: StoryObj<ButtonWithIconProps> = {
  render: (args: ButtonWithIconProps) => <ButtonWithIcon {...args} />,
};
