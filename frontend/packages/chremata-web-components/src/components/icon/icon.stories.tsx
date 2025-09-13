import { type Meta, type StoryObj } from '@storybook/react';

import { Size } from '@chremata/utils';

import { DEFAULT_ICON_PROPS } from './use-icon';
import { Icon } from './icon';
import type { IconProps } from './icon.types';

export default {
  id: 'Icon',
  title: 'Icon',

  component: Icon,

  argTypes: {
    name: {
      control: 'select',
    },
    label: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: [Size.SMALL, Size.MEDIUM, Size.LARGE, Size.XLARGE],
    },
    primaryColor: {
      control: 'color',
    },
    primaryColorDisabled: {
      control: 'color',
    },
  },

  args: {
    ...DEFAULT_ICON_PROPS,

    label: 'Coin',
    name: 'CoinIconSvg',
    primaryColor: 'black',
  },
} satisfies Meta<typeof Icon>;

export const Default: StoryObj<IconProps> = {
  render: (args: IconProps) => <Icon {...args} />,
};
