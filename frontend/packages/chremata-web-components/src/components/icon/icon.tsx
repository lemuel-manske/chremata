import * as React from 'react';

import { solid as availableSVGs } from '@chremata/icons';

import { type IconProps, type InnerIconProps } from './icon.types';
import { IconWrapper } from './icon-wrapper/icon-wrapper';

import { useIcon } from './use-icon';

function InnerIcon(props: InnerIconProps) {
  const { name, ...svgProps } = props;

  return React.createElement(availableSVGs[name], svgProps);
}

function Icon(props: IconProps) {
  const { label, name, size, disabled, ...svgProps } = useIcon(props);

  return (
    <IconWrapper label={label} size={size} disabled={disabled}>
      <InnerIcon name={name} disabled={disabled} {...svgProps} />
    </IconWrapper>
  );
}

export { Icon };
