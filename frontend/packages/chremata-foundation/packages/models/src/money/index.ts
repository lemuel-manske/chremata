/**
 * Defines available currencies.
 */
enum Currency {
  BRL = 'BRL',
  USD = 'USD',
}

/**
 * Defines available locales.
 */
enum Locale {
  BRAZIL = 'pt-BR',
}

type MoneyOpts = {
  currency?: Currency;
  amount?: number;
};

/**
 * Returns a formatted money amount.
 */
type MoneyInterface = {
  /**
   * Formats the amount according to the specified locale.
   */
  format: (locale?: Locale) => string;

  /**
   * Returns the currency code.
   */
  currency: () => Currency;

  /**
   * Returns the raw amount.
   */
  amount: () => number;

  /**
   * Returns true if the amount is positive.
   */
  isPositive: () => boolean;
};

const Money = (opts: MoneyOpts): MoneyInterface => {
  const { currency = Currency.BRL, amount = 0.0 } = opts;

  const format = (locale: Locale = Locale.BRAZIL) => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }).format(amount);
  };

  return {
    format,
    isPositive: () => amount >= 0,
    currency: () => currency,
    amount: () => amount,
  };
};

export { Money, Currency, Locale, type MoneyInterface };
