export enum Currency {
  US_DOLLAR = 'USD',
  BRAZILIAN_REAL = 'BRL',
}

export enum Locale {
  BRAZIL = 'pt-BR',
  USA = 'en-US',
}

export type MoneyProps = {
  /**
   * The monetary amount to be displayed.
   */
  amount: number;

  /**
   * The currency code (e.g., 'USD', 'EUR') for formatting the amount. Default is 'BRL'.
   */
  currency?: Currency;

  /**
   * The locale code (e.g., 'en-US', 'pt-BR') for formatting the amount. Default is 'pt-BR'.
   */
  locale?: Locale;
};
