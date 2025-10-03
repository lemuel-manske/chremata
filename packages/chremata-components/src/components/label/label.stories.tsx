import { type Meta, type StoryObj } from '@storybook/react';

import { Size, Variant } from '@chremata/utils';

import { Label } from './label';
import { type LabelProps } from './label.types';
import { DEFAULT_LABEL_PROPS } from './use-label';

interface LabelFixtureProps extends LabelProps {
  label: string;
}

function LabelFixture(props: LabelFixtureProps) {
  const { label, ...rest } = props;

  return <Label {...rest}>{label}</Label>;
}

export default {
  id: 'Label',
  title: 'Label',

  component: LabelFixture,

  argTypes: {
    id: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
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
      control: 'text',
    },
  },

  args: {
    ...DEFAULT_LABEL_PROPS,

    color: 'white',
    label: 'Label',
  },
} satisfies Meta<typeof LabelFixture>;

export const Default: StoryObj<LabelFixtureProps> = {
  render: (args: LabelFixtureProps) => <LabelFixture {...args} />,
};
