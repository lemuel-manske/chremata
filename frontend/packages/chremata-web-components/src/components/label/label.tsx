import { classNames } from '@chremata/utils';

import { type LabelProps } from './label.types';

import { useLabel } from './use-label';

import './index.css';
import { LabelIcon } from './label-icon/label-icon';
import { LabelContext } from './label.context';

Label.Icon = LabelIcon;

export function Label(props: LabelProps) {
  const { id, disabled, size, variant, label, icon } = useLabel(props);

  const classes = classNames({
    'ch-label': true,
    [`ch-label--${size}`]: true,
    [`ch-label--${variant}`]: true,
  });

  const wrapperClasses = classNames({
    'ch-label--wrapper': true,
    'ch-label--wrapper-disabled': disabled,
  });

  const stateValue = { label, variant, size, state: { disabled } };

  return (
    <LabelContext.Provider value={stateValue}>
      <span
        className={wrapperClasses}
        aria-disabled={disabled}>
        {icon && icon}

        <label
          id={id}
          aria-disabled={disabled}
          className={classes}>
          {label}
        </label>
      </span>
    </LabelContext.Provider>
  );
}
