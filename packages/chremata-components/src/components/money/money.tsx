import { classNames } from '@chremata/utils';

import { Label } from '../label/label';

import { type MoneyProps } from './money.types';
import { useMoney } from './use-money';

export function Money(props: MoneyProps) {
  const { amount, color, size, variant } = useMoney(props);

  const classes = classNames({
    'ch-money': true,
  });

  return (
    <span className={classes}>
      <Label
        color={color}
        size={size}
        variant={variant}>
        {amount}
      </Label>
    </span>
  );
}
