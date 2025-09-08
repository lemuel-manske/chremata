import { type Meta, type StoryObj } from '@storybook/react';

import { Currency, Locale } from '@chremata/utils';

import { DEFAULT_MONEY_PROPS } from './use-money';
import { ZeroAmountMoney } from './money.fixture';
import { type MoneyProps } from './money.types';

export default {
  id: 'Money',
  title: 'Money',

  component: ZeroAmountMoney,

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
  },

  args: {
    ...DEFAULT_MONEY_PROPS,
  },
} satisfies Meta<typeof ZeroAmountMoney>;

export const Default: StoryObj<MoneyProps> = {
  render: (args: MoneyProps) => <ZeroAmountMoney {...args} />,
};
