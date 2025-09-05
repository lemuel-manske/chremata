import React from 'react';

import { type ButtonProps } from './button.types';

import './index.css';

const DEFAULT_PROPS: ButtonProps = {
  label: 'Button',
  disabled: false,
};

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { label = DEFAULT_PROPS.label, disabled = DEFAULT_PROPS.disabled, onClick } = props;

  const classNames = 'ch-button';

  return (
    <button className={classNames} aria-label={label} disabled={disabled} onClick={disabled ? undefined : onClick}>
      {label}
    </button>
  );
};

export { DEFAULT_PROPS, Button };
