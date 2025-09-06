import * as React from 'react';

import type { DefaultButtonProps, ButtonProps } from './button.types';

import { ButtonLabel } from './button-label/button-label';
import { ButtonIcon } from './button-icon/button-icon';

export function findChild<T>(
  children: React.ReactNode,
  type: React.ElementType<T>
): React.ReactElement<T> | undefined {
  return React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === type
  ) as React.ReactElement<T> | undefined;
}

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
