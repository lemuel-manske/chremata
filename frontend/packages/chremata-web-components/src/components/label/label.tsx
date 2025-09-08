import { classNames } from '@chremata/utils';

import { type LabelProps } from './label.types';

import { useLabel } from './use-label';

import './index.css';

export function Label(props: LabelProps) {
  const { id, disabled, size, color, variant, label } = useLabel(props);

  const classes = classNames({
    'ch-label': true,
    'ch-label--disabled': disabled,
    [`ch-label--${size}`]: true,
    [`ch-label--${variant}`]: true,
  });

  return (
    <label
      id={id}
      color={color}
      aria-disabled={disabled}
      className={classes}>
      {label}
    </label>
  );
}
