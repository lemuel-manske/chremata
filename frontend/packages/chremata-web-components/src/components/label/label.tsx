import { classNames } from '@chremata/utils';

import { type LabelProps } from './label.types';

import { useLabel } from './use-label';

import './index.css';

export function Label(props: LabelProps) {
  const { id, disabled, size, color, variant, label } = useLabel(props);

  const classes = classNames({
    'ch-label': true,
    [`ch-label--${size}`]: true,
    [`ch-label--${variant}`]: true,
  });

  const styles = {
    color: color,
  };

  return (
    <label
      id={id}
      aria-disabled={disabled}
      style={styles}
      className={classes}>
      {label}
    </label>
  );
}
