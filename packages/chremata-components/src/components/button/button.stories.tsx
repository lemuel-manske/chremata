import { type Meta, type StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import { Size } from '@chremata/utils';

import { DEFAULT_BUTTON_PROPS } from './use-button';
import { ButtonVariantEnum, type ButtonProps } from './button.types';
import { Button } from './button';

export default {
  id: 'Button',
  title: 'Button',

  component: Button,

  argTypes: {
    label: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: [Size.SMALL, Size.MEDIUM, Size.LARGE, Size.FILL_AVAILABLE],
    },
    disabled: {
      control: 'boolean',
    },
    onClick: {
      action: 'clicked',
    },
    variant: {
      control: 'select',
      options: [ButtonVariantEnum.PRIMARY, ButtonVariantEnum.SECONDARY],
    },
    icon: {
      control: 'select',
    },
  },

  args: {
    ...DEFAULT_BUTTON_PROPS,

    onClick: fn(),

    label: 'Button',
    icon: 'CoinIconSvg',
  },
} satisfies Meta<typeof Button>;

export const Default: StoryObj<ButtonProps> = {
  render: (args: ButtonProps) => <Button {...args} />,
};
