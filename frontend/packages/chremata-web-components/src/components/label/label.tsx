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
    [`ch-label--${size}`]: true,
    [`ch-label--${variant}`]: true,
  });

  const wrapperClasses = classNames({
    'ch-label-wrapper': true,
  });

  const styles = styleMap({
    color,
  });

  const stateValue = { label, variant, size, state: { disabled } };

  return (
    <LabelContext.Provider value={stateValue}>
      <span
        className={wrapperClasses}
        style={styles}
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
