import { html, LitElement } from 'lit';

import { customElement, property, state } from 'lit/decorators.js';

import { Currency, Locale, Money as MoneyModel, type MoneyInterface } from '@chremata-foundation/models';

import styles from './money.styles.js';

type MoneyProps = {
  amount: number;
  currency: Currency;
  locale: Locale;
};

const DEFAULT_PROPS: MoneyProps = {
  amount: 0,
  currency: Currency.BRL,
  locale: Locale.BRAZIL,
};

@customElement('ch-money')
class Money extends LitElement {
  @property()
  amount = DEFAULT_PROPS.amount;

  @property()
  currency = DEFAULT_PROPS.currency;

  @property()
  locale = DEFAULT_PROPS.locale;

  static styles = [styles];

  #money: MoneyInterface;

  constructor() {
    super();

    this.#money = MoneyModel({ amount: this.amount, currency: this.currency });
  }

  #formattedAmount() {
    const signal = this.#money.isPositive() ? '+' : '';
    const amount = this.#money.format(this.locale);

    return signal + amount;
  }

  #signDecorator(): string {
    const posDecorator = 'ch-money__positive';
    const negDecorator = 'ch-money__negative';

    return this.#money.isPositive() ? posDecorator : negDecorator;
  }

  render() {
    this.#money = MoneyModel({ amount: this.amount, currency: this.currency });

    return html`<span class="ch-money ${this.#signDecorator()}"> ${this.#formattedAmount()} </span>`;
  }
}

export { DEFAULT_PROPS, Money, type MoneyProps };
