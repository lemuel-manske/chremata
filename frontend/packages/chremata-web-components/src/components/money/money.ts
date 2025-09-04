import { html, LitElement } from 'lit';

import { customElement, property } from 'lit/decorators.js';

import styles from './money.styles.js';

enum Currency {
  BRL = 'BRL',
}

enum Locale {
  BRAZIL = 'pt-BR',
}

type MoneyProps = {
  currency: Currency;
  locale: Locale;
  amount: number;
};

const DEFAULT_PROPS: MoneyProps = {
  currency: Currency.BRL,
  locale: Locale.BRAZIL,
  amount: 0,
};

@customElement('ch-money')
class Money extends LitElement {
  @property({ type: Currency })
  currency = DEFAULT_PROPS.currency;

  @property({ type: Locale })
  locale = DEFAULT_PROPS.locale;

  @property({ type: Number })
  amount = DEFAULT_PROPS.amount;

  static styles = [styles];

  private readonly FORMATTER = new Intl.NumberFormat(this.locale, {
    style: 'currency',
    currency: this.currency,
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

  #isPositive() {
    return this.amount >= 0;
  }

  #formattedAmount() {
    const signal = this.#isPositive() ? '+' : '';
    const amount = this.FORMATTER.format(this.amount);

    return signal + amount;
  }

  render() {
    const posDecorator = 'ch-money__positive';
    const negDecorator = 'ch-money__negative';

    return html`<span class="ch-money ${this.#isPositive() ? posDecorator : negDecorator}">
      ${this.#formattedAmount()}
    </span>`;
  }
}

export { DEFAULT_PROPS, Money, type MoneyProps, Locale, Currency };
