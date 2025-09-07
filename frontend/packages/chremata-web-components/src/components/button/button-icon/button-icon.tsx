import * as React from 'react';

import { type IconSize } from '../../icon/icon.types';

import { type ButtonSize } from '../button.types';
import { useButtonContext } from '../button.context';

import { type ButtonIconProps } from './button-icon.types';

const ICON_SIZE_MAP: Record<ButtonSize, IconSize> = {
  small: 'large',
  medium: 'xlarge',
};

export function ButtonIcon(props: ButtonIconProps) {
  const { children } = props;

  const { size } = useButtonContext();

  return React.cloneElement(children, {
    color: 'white',
    size: ICON_SIZE_MAP[size],
  });
}
