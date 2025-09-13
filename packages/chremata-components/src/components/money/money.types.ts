import {
  type Currency,
  type Locale,
  type EnumOrStringLiteralTypes,
} from '@chremata/utils';

import type { LabelProps } from '../label/label.types';

export type MoneyCurrency = EnumOrStringLiteralTypes<Currency>;

export type MoneyLocale = EnumOrStringLiteralTypes<Locale>;

type MoneyLabelAttributes = Pick<LabelProps, 'size' | 'variant'>;

type MoneyAttributes = {
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

export type MoneyProps = MoneyLabelAttributes & MoneyAttributes;

export type DefaultMoneyProps = Required<
  Pick<MoneyProps, 'currency' | 'locale' | 'size' | 'variant'>
>;
