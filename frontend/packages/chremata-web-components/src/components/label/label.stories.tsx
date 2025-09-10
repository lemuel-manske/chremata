import { type Meta, type StoryObj } from '@storybook/react';

import { Size, Variant } from '@chremata/utils';

import { Label } from './label';
import { LabelWithIcon, type LabelWithIconProps } from './label.fixture';

export default {
  id: 'Label',
  title: 'Label',

  component: Label,

  argTypes: {
    disabled: {
      control: 'boolean',
    },
    hiddenIcon: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: [Size.SMALL, Size.MEDIUM, Size.LARGE, Size.XLARGE],
    },
    variant: {
      control: 'select',
      options: [Variant.EMPHASIS, Variant.REGULAR],
    },
    icon: {
      control: 'text',
    },
  },

  args: {
    disabled: false,
    size: 'medium',
    variant: 'regular',
    label: 'Label',
    icon: 'CoinIconSvg',
  },
} satisfies Meta<typeof LabelWithIcon>;

export const Default: StoryObj<LabelWithIconProps> = {
  render: (args: LabelWithIconProps) => <LabelWithIcon {...args} />,
};
