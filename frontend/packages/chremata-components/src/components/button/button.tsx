import { classNames, doNothing } from '@chremata/utils';

import { Label } from '../label/label';

import type { ButtonProps } from './button.types';

import { useButton } from './use-button';

import './index.css';

export function Button(props: ButtonProps) {
  const { color, label, labelSize, size, icon, disabled, variant, onClick } =
    useButton(props);

  const classes = classNames({
    'ch-button': true,
    [`ch-button--${size}`]: true,
    [`ch-button--${variant}`]: true,
  });

  return (
    <button
      aria-label={label}
      className={classes}
      disabled={disabled}
      onClick={disabled ? doNothing : onClick}>
      <Label
        size={labelSize}
        color={color}
        disabled={disabled}>
        {icon && <Label.Icon name={icon} />}
        {label}
      </Label>
    </button>
  );
}
