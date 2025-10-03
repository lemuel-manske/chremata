import { classNames, styleMap } from '@chremata/utils';

import { type LabelProps } from './label.types';
import { useLabel } from './use-label';

import './index.css';

export function Label(props: LabelProps) {
  const { id, disabled, fontColor, fontFamily, fontSize, fontWeight, label } = useLabel(props);

  const classes = classNames({
    'ch-label': true,
  });

  const wrapperClasses = classNames({
    'ch-label-wrapper': true,
  });

  const styles = styleMap({
    '--font-color': fontColor,
    '--font-family': fontFamily,
    '--font-size': fontSize,
    '--font-weight': fontWeight, 
  });

  return (
    <span
      className={wrapperClasses}
      aria-disabled={disabled}>
      <label
        style={styles}
        aria-disabled={disabled}
        className={classes}
        id={id}>
        {label}
      </label>
    </span>
  );
}
