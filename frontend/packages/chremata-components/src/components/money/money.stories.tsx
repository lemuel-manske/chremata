import type { Meta, StoryObj } from '@storybook/react-vite';

import { Money, type MoneyProps, MoneyType } from './money';

export default {
  args: { amount: 12.51, type: MoneyType.REVENUE },
  argTypes: {
    type: {
      control: { type: 'select', labels: ['Revenue', 'Expense', 'Neutral'] },
      options: [MoneyType.REVENUE, MoneyType.EXPENSE, MoneyType.NEUTRAL],
    },
  },
  component: Money,
  title: 'Money',
  id: 'money',
} satisfies Meta<typeof Money>;

export const Default: StoryObj<typeof Money> = {
  render: (props: MoneyProps) => <Money {...props} />,
};
