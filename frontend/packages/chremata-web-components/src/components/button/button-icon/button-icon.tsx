import * as React from 'react';

import { type IconSize } from '../../icon/icon.types';

import { type ButtonSize } from '../button.types';
import { useButtonContext } from '../button.context';

import {
  type ButtonIconProps,
  type DefaultButtonIconProps,
} from './button-icon.types';

const ICON_SIZE_MAP: Record<ButtonSize, IconSize> = {
  small: 'large',
  medium: 'xlarge',
};

export const DEFAULT_BUTTON_ICON_PROPS: DefaultButtonIconProps = {
  color: 'currentColor',
};

export function ButtonIcon(props: ButtonIconProps) {
  const { children, color } = { ...DEFAULT_BUTTON_ICON_PROPS, ...props };

  const { size } = useButtonContext();

  return React.cloneElement(children, {
    primaryColor: color,
    size: ICON_SIZE_MAP[size],
  });
}
