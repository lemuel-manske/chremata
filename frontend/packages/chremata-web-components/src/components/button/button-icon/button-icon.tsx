import * as React from 'react';

import { type ButtonIconProps } from './button-icon.types';

import { type ButtonSize } from '../button.types';
import { type IconSize } from '../../icon/icon.types';
import { useButtonContext } from '../button.context';

const ICON_SIZE_MAP: Record<ButtonSize, IconSize> = {
  small: 'medium',
  medium: 'xlarge',
};

function ButtonIcon(props: ButtonIconProps) {
  const { children } = props;

  const { size } = useButtonContext();

  return React.cloneElement(children, {
    size: ICON_SIZE_MAP[size],
  });
}

export { ButtonIcon };
