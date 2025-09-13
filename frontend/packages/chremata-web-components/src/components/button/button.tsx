import { classNames, doNothing } from '@chremata/utils';

import { Label } from '../label/label';

import type { ButtonProps } from './button.types';

import { useButton } from './use-button';

import './index.css';

export function Button(props: ButtonProps) {
  const { label, size, icon, disabled, variant, onClick } = useButton(props);

  const classes = classNames({
    'ch-button': true,
    [`ch-button--${variant}`]: true,
    [`ch-button--${size}`]: true,
  });

  return (
    <button
      aria-label={label}
      className={classes}
      disabled={disabled}
      onClick={disabled ? doNothing : onClick}>
      <Label
        size={size}
        disabled={disabled}>
        {icon && <Label.Icon name={icon} />}
        {label}
      </Label>
    </button>
  );
}
