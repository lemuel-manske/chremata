import { classNames, doNothing } from '@chremata/utils';

import { ButtonIcon } from './button-icon/button-icon';
import { ButtonLabel } from './button-label/button-label';

import type { ButtonProps } from './button.types';

import { useButton } from './use-button';
import { ButtonContext } from './button.context';

import './index.css';

Button.Icon = ButtonIcon;
Button.Label = ButtonLabel;

export function Button(props: ButtonProps) {
  const {
    children,
    color,
    fit,
    label,
    size,
    disabled,
    variant,

   onClick,
  } = useButton(props);

  const classes = classNames({
    'ch-button': true,
    [`ch-button--${fit}`]: true,
    [`ch-button--${size}`]: true,
    [`ch-button--${variant}`]: true,
  });

  const state = { disabled };

  return (
    <ButtonContext.Provider value={{ label, size, color, variant, state }}>
      <button
        aria-label={label}
        className={classes}
        disabled={disabled}
        onClick={disabled ? doNothing : onClick}
        tabIndex={0}>
        {children}
      </button>
    </ButtonContext.Provider>
  );
}
