import { type Meta, type StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { DEFAULT_BUTTON_PROPS } from './use-button';
import { ButtonWithIcon, type ButtonWithIconProps } from './button.fixture';
import { Size } from '@chremata/utils';

export default {
  id: 'Button',
  title: 'Button',

  component: ButtonWithIcon,

  argTypes: {
    label: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: [Size.SMALL, Size.MEDIUM],
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

    onClick: fn(),

    label: 'Button',
    iconHidden: false,
  },
} as Meta<typeof ButtonWithIcon>;

export const Default: StoryObj<ButtonWithIconProps> = {
  render: (args: ButtonWithIconProps) => <ButtonWithIcon {...args} />,
};
