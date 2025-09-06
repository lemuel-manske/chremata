import * as React from 'react';

import { type ButtonIconProps } from './button-icon.types';

export const ButtonIcon: React.FC<ButtonIconProps> = (
  props: ButtonIconProps
) => {
  const { children } = props;

  return React.cloneElement(children);
};
