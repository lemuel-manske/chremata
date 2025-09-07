import { type DefaultMoneyProps, type MoneyProps } from './money.types';

export const DEFAULT_MONEY_PROPS: DefaultMoneyProps = {
  currency: 'BRL',
  locale: 'pt-BR',
};

export function useMoney(props: MoneyProps) {
  const {
    amount,
    currency = DEFAULT_MONEY_PROPS.currency,
    locale = DEFAULT_MONEY_PROPS.locale,
  } = props;

  const amountWithCurrency = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);

  const positive = amount > 0 ? '+' : '';

  const formattedAmount = `${positive}${amountWithCurrency}`;

  return {
    amount,
    formattedAmount,
  };
}
