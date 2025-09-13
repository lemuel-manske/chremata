import { classNames } from '@chremata/utils';

import { Label } from '../label/label';

import { type MoneyProps } from './money.types';
import { useMoney } from './use-money';

import './index.css';

export function Money(props: MoneyProps) {
  const { amount, formattedAmount, size, variant } = useMoney(props);

  const classes = classNames({
    'ch-money': true,
    'ch-money--positive': amount > 0,
    'ch-money--negative': amount < 0,
  });

  return (
    <span className={classes}>
      <Label
        size={size}
        variant={variant}>
        {formattedAmount}
      </Label>
    </span>
  );
}
