import { html } from 'lit';

import type { Meta, StoryObj } from '@storybook/web-components';

import { DEFAULT_PROPS, Locale, Currency, type MoneyProps } from './money.js';

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
  render: (args) => html`<ch-money .currency=${args.currency} .locale=${args.locale} .amount=${args.amount} />`,
};
