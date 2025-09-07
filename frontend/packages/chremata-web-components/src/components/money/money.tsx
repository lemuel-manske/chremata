import { classNames } from '@chremata/utils';

import { type MoneyProps } from './money.types';

import { useMoney } from './use-money';

import './index.css';

export function Money(props: MoneyProps) {
  const { amount, formattedAmount } = useMoney(props);

  const classes = classNames({
    'ch-money': true,
    'ch-money__positive': amount > 0,
    'ch-money__negative': amount < 0,
  });

  const role = 'text';

  return (
    <span className={classes} role={role} aria-label={formattedAmount}>
      {formattedAmount}
    </span>
  );
}
