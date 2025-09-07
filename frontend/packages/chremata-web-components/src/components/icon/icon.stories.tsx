import { type Meta, type StoryObj } from '@storybook/react';

import { Size } from '@chremata/utils';

import { DEFAULT_ICON_PROPS } from './use-icon';

import { type SolidIconProps, SolidIcon } from './icon.fixture';

export default {
  id: 'Icon',
  title: 'Icon',

  component: SolidIcon,

  argTypes: {
    name: {
      control: 'text',
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
  },

  args: {
    ...DEFAULT_ICON_PROPS,

    label: 'Coin',
    name: 'CoinIconSvg',
    primaryColor: 'black',
  },
} satisfies Meta<typeof SolidIcon>;

export const Default: StoryObj<SolidIconProps> = {
  render: (args: SolidIconProps) => <SolidIcon {...args} />,
};
