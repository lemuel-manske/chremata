import {
  Currency,
  Locale,
  type EnumOrStringLiteralTypes,
} from '@chremata/utils';

export type MoneyCurrency = EnumOrStringLiteralTypes<Currency>;

export type MoneyLocale = EnumOrStringLiteralTypes<Locale>;

export type MoneyProps = {
  /**
   * The monetary amount to be displayed.
   */
  amount: number;

  /**
   * The currency code (e.g., 'USD', 'EUR') for formatting the amount. Default is 'BRL'.
   */
  currency?: MoneyCurrency;

  /**
   * The locale code (e.g., 'en-US', 'pt-BR') for formatting the amount. Default is 'pt-BR'.
   */
  locale?: MoneyLocale;
};

export type DefaultMoneyProps = Required<
  Pick<MoneyProps, 'currency' | 'locale'>
>;
