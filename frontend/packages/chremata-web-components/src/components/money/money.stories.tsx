import { type Meta, type StoryObj } from '@storybook/react';

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
      control: 'text',
      options: ['BRL'],
    },
    locale: {
      control: 'text',
      options: ['pt-BR'],
    },
  },

  args: {
    ...DEFAULT_MONEY_PROPS,
    amount: 0.0,
  },
} as Meta<typeof ZeroAmountMoney>;

export const Default: StoryObj<MoneyProps> = {
  render: (args: MoneyProps) => <ZeroAmountMoney {...args} />,
};
