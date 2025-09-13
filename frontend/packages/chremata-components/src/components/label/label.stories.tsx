import { type Meta, type StoryObj } from '@storybook/react';

import { Size, Variant } from '@chremata/utils';

import { Label } from './label';
import { LabelColorEnum, type LabelProps } from './label.types';

export default {
  id: 'Label',
  title: 'Label',

  component: Label,

  argTypes: {
    disabled: {
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
    color: {
      control: 'select',
      options: [LabelColorEnum.REGULAR, LabelColorEnum.ACCENT],
    }
  },

  args: {
    color: 'regular',
    disabled: false,
    size: 'medium',
    variant: 'regular',
  },
} satisfies Meta<typeof Label>;

export const Default: StoryObj<LabelProps> = {
  render: (args: LabelProps) => 
    <Label {...args}>
      <Label.Icon name={'CoinIconSvg'} />
      Label
    </Label>
,
};
