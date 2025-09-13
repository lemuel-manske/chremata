import { classNames, styleMap } from '@chremata/utils';

import { type LabelProps } from './label.types';

import { useLabel } from './use-label';

import { LabelIcon } from './label-icon/label-icon';
import { LabelContext } from './label.context';

import './index.css';

Label.Icon = LabelIcon;

export function Label(props: LabelProps) {
  const { id, disabled, color, size, variant, label, icon } = useLabel(props);

  const classes = classNames({
    'ch-label': true,
    [`ch-label--${variant}`]: true,
    [`ch-label--${size}`]: true,
  });

  const wrapperClasses = classNames({
    'ch-label-wrapper': true,
    [`ch-label-wrapper--${color}`]: true,
    [`ch-label-wrapper--${color}-disabled`]: disabled,
  });
  
  const stateValue = { label, variant, size, state: { disabled } };

  return (
    <LabelContext.Provider value={stateValue}>
      <span className={wrapperClasses} aria-disabled={disabled}>
        {icon && icon}

        <label
          aria-disabled={disabled}
          className={classes}
          id={id}>
          {label}
        </label>
      </span>
    </LabelContext.Provider>
  );
}
