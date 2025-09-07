import { type MoneyProps } from './money.types';

import { Money } from './money';

export function ZeroAmountMoney(props: MoneyProps) {
  return <Money {...props} />;
}
