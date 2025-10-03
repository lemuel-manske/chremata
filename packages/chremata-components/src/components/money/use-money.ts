import { type DefaultMoneyProps, type MoneyProps } from './money.types';
import tokens from './money.tokens';

export const DEFAULT_MONEY_PROPS: DefaultMoneyProps = {
  size: 'medium',
  variant: 'regular',
  currency: 'BRL',
  locale: 'pt-BR',
};

export function useMoney(props: MoneyProps) {
  const {
    amount,
    currency = DEFAULT_MONEY_PROPS.currency,
    locale = DEFAULT_MONEY_PROPS.locale,
    variant = DEFAULT_MONEY_PROPS.variant,
    size = DEFAULT_MONEY_PROPS.size,
  } = props;

  const amountWithCurrency = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);

  const positive = amount > 0 ? '+' : '';

  const formattedAmount = `${positive}${amountWithCurrency}`;

  const getColor = () => {
    if (amount > 0) return 'positive';
    if (amount < 0) return 'negative';
    return 'neutral';
  };

  const color = tokens.color[getColor()];

  return {
    amount: formattedAmount,
    color,
    variant,
    size,
  };
}
