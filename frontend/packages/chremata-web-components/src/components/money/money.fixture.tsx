import { type MoneyProps } from './money.types';

import { Money } from './money';

export function ZeroAmountMoney(props: MoneyProps) {
  const { amount = 0, ...rest } = props;

  return (
    <Money
      amount={amount}
      {...rest}
    />
  );
}
