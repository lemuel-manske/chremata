import { classNames, doNothing } from '@chremata/utils';

import { ButtonLabel } from './button-label/button-label';
import { ButtonIcon } from './button-icon/button-icon';

import { type ButtonProps } from './button.types';
import { useButton } from './use-button';
import { ButtonContext } from './button.context';

import './index.css';

export function Button(props: ButtonProps) {
  const { label, size, icon, disabled, variant, contextValue, onClick } =
    useButton(props);

  const classes = classNames({
    'ch-button': true,
    [`ch-button--${variant}`]: true,
    [`ch-button--${size}`]: true,
  });

  return (
    <ButtonContext.Provider value={contextValue}>
      <button
        className={classes}
        aria-label={label}
        disabled={disabled}
        onClick={disabled ? doNothing : onClick}>
        {icon && <ButtonIcon>{icon}</ButtonIcon>}

        <ButtonLabel>{label}</ButtonLabel>
      </button>
    </ButtonContext.Provider>
  );
}
