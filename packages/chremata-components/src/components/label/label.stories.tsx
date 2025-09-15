import { type Meta, type StoryObj } from '@storybook/react';

import { Size, Variant } from '@chremata/utils';

import { Label } from './label';
import { LabelColorEnum, type LabelProps } from './label.types';
import { DEFAULT_LABEL_PROPS } from './use-label';
import type { IconSolidNames } from '../icon/icon.types';

interface LabelFixtureProps extends LabelProps {
  label: string;
  icon?: IconSolidNames;
}

function LabelFixture(props: LabelFixtureProps) {
  const { label, icon, ...rest } = props;

  return (
    <Label {...rest}>
      {icon && <Label.Icon name={icon} />}
      {label}
    </Label>
  );
}

export default {
  id: 'Label',
  title: 'Label',

  component: LabelFixture,

  argTypes: {
    id: {
      control: 'text',
    },
    icon: {
      control: 'select',
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
      control: 'select',
      options: [LabelColorEnum.REGULAR, LabelColorEnum.ACCENT],
    },
  },

  args: {
    ...DEFAULT_LABEL_PROPS,

    label: 'Label',
    icon: 'CoinIconSvg',
  },
} satisfies Meta<typeof LabelFixture>;

export const Default: StoryObj<LabelFixtureProps> = {
  render: (args: LabelFixtureProps) => <LabelFixture {...args} />,
};
