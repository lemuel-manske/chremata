import { classNames, doNothing, styleMap } from '@chremata/utils';

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
    background,
    backgroundActive,
    backgroundDisabled,
    backgroundFocusVisible,
    backgroundHover,

    color,
    padding,
    width,
    justify,

    children,
    disabled,
    label,
    size,
    variant,

    onClick,
  } = useButton(props);

  const classes = classNames({
    'ch-button': true,
    [`ch-button--justify-${justify}`]: true,
    [`ch-button--${variant}`]: true,
  });

  const styles = styleMap({
    '--button-width': width,
    '--button-padding': padding,
    '--button-background-color': background,
    '--button-background-color-active': backgroundActive,
    '--button-background-color-disabled': backgroundDisabled,
    '--button-background-color-focus-visible': backgroundFocusVisible,
    '--button-background-color-hover': backgroundHover,
  });

  const state = { disabled };

  return (
    <ButtonContext.Provider value={{ label, size, color, variant, state }}>
      <button
        aria-label={label}
        className={classes}
        disabled={disabled}
        onClick={disabled ? doNothing : onClick}
        tabIndex={0}
        style={styles}>
        {children}
      </button>
    </ButtonContext.Provider>
  );
}
