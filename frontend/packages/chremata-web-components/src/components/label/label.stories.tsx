import { type Meta, type StoryObj } from '@storybook/react';

import { DEFAULT_LABEL_PROPS } from './use-label';
import { type LabelProps } from './label.types';
import { Label } from './label';

export default {
  id: 'Label',
  title: 'Label',

  component: Label,

  args: {
    ...DEFAULT_LABEL_PROPS,

    children: 'Label',
  },
} satisfies Meta<typeof Label>;

export const Default: StoryObj<LabelProps> = {
  render: (args: LabelProps) => <Label {...args} />,
};
