import classNames from '../utils';

import type { ButtonProps } from './button.types';
import './button.css';

const Button = (props: ButtonProps) => {
  const { onClick, label, disabled } = props;

  const buttonClassNames = classNames({
    'ch-button': true,
  });

  return (
    <button
      className={buttonClassNames}
      aria-label={label}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={onClick}
    >
      <span>{label}</span>
    </button>
  );
};

export { Button };
