import { doNothing } from '@chremata/utils';

import { type ButtonProps } from './button.types';

import { ButtonLabel } from './button-label/button-label';
import { ButtonIcon } from './button-icon/button-icon';

import { useButton } from './use-button';

import './index.css';

const Button = (props: ButtonProps) => {
  const { label, disabled, startIcon, onClick } = useButton(props);

  const classNames = 'ch-button';

  return (
    <button
      className={classNames}
      aria-label={label}
      disabled={disabled}
      onClick={disabled ? doNothing : onClick}
    >
      {startIcon && startIcon} {label}
    </button>
  );
};

Button.Label = ButtonLabel;
Button.Icon = ButtonIcon;

export { Button };
