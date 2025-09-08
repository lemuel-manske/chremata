import { type Meta, type StoryObj } from '@storybook/react';

import { DEFAULT_LABEL_PROPS } from './use-label';
import { type LabelProps } from './label.types';
import { Label } from './label';
import { Size, Variant } from '@chremata/utils';

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
      control: 'color',
    },
  },

  args: {
    ...DEFAULT_LABEL_PROPS,

    children: 'Label',
  },
} satisfies Meta<typeof Label>;

export const Default: StoryObj<LabelProps> = {
  render: (args: LabelProps) => <Label {...args} />,
};
