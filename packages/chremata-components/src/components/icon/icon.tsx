import * as React from 'react';

import { solid as availableSVGs } from '@chremata/icons';
import { classNames, styleMap } from '@chremata/utils';

import { type IconProps, type InnerIconProps } from './icon.types';

import { useIcon } from './use-icon';

import './index.css';

function InnerIcon(props: InnerIconProps) {
  const { name, ...svgProps } = props;

  return React.createElement(availableSVGs[name], svgProps);
}

export function Icon(props: IconProps) {
  const { label, name, size, disabled, pointer, ...svgProps } = useIcon(props);

  const classes = classNames({
    'ch-icon': true,
  });

  const styles = styleMap({
    '--icon-pointer': pointer,
    '--icon-size': size,
  });

  return (
    <div
      aria-label={label}
      aria-disabled={disabled}
      className={classes}
      style={styles}
      role="img">
      <InnerIcon
        name={name}
        disabled={disabled}
        {...svgProps}
      />
    </div>
  );
}
