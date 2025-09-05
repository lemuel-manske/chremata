import { html } from 'lit';

import type { Meta, StoryObj } from '@storybook/web-components';

import { Currency, Locale } from '@chremata-foundation/models';

import { DEFAULT_PROPS, type MoneyProps } from './money.js';

export default {
  component: 'ch-money',
  id: 'Money',
  title: 'Money',

  argTypes: {
    currency: {
      control: { type: 'select' },
      options: [Currency.BRL],
    },
    locale: {
      control: { type: 'select' },
      options: [Locale.BRAZIL],
    },
  },

  args: {
    ...DEFAULT_PROPS,
  },
} as Meta<MoneyProps>;

export const Default: StoryObj<MoneyProps> = {
  args: {
    amount: 12,
  },

  render: (args) => html`<ch-money .amount=${args.amount} .currency=${args.currency} .locale=${args.locale} />`,
};
