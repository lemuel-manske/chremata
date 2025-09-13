import { type Meta, type StoryObj } from '@storybook/react';

import { Size, Variant, Currency, Locale } from '@chremata/utils';

import { DEFAULT_MONEY_PROPS } from './use-money';
import { type MoneyProps } from './money.types';
import { Money } from './money';

export default {
  id: 'Money',
  title: 'Money',

  component: Money,

  argTypes: {
    amount: {
      control: 'number',
    },
    currency: {
      control: 'select',
      options: [Currency.BRAZILIAN_REAL, Currency.US_DOLLAR],
    },
    locale: {
      control: 'select',
      options: [Locale.BRAZIL, Locale.USA],
    },
    size: {
      control: 'select',
      options: [Size.SMALL, Size.MEDIUM, Size.LARGE, Size.XLARGE],
    },
    variant: {
      control: 'select',
      options: [Variant.EMPHASIS, Variant.REGULAR],
    },
  },

  args: {
    ...DEFAULT_MONEY_PROPS,

    amount: 0,
  },
} satisfies Meta<typeof Money>;

export const Default: StoryObj<MoneyProps> = {
  render: (args: MoneyProps) => <Money {...args} />,
};
