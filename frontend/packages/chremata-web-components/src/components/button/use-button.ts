import { findChild } from '@chremata/utils';

import type { DefaultButtonProps, ButtonProps } from './button.types';

import { ButtonLabel } from './button-label/button-label';
import { ButtonIcon } from './button-icon/button-icon';

export const DEFAULT_BUTTON_PROPS: DefaultButtonProps = {
  disabled: false,
};

export function useButton(props: ButtonProps) {
  const { disabled, children, onClick } = props;

  const childrenArray = [children].flat();

  const labelChild = findChild(childrenArray, ButtonLabel);

  if (!labelChild) {
    throw new Error('[Button] requires a label.');
  }

  const { children: label } = labelChild.props;

  const startIcon = findChild(childrenArray, ButtonIcon);

  return {
    startIcon,
    label,
    disabled,
    onClick,
  };
}
