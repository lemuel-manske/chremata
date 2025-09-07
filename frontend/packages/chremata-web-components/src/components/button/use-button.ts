import { findChild } from '@chremata/utils';

import { Icon } from '../icon/icon';

import { type DefaultButtonProps, type ButtonProps } from './button.types';
import type { ButtonContextValue } from './button.context';

export const DEFAULT_BUTTON_PROPS: DefaultButtonProps = {
  size: 'medium',
  disabled: false,
};

export function useButton(props: ButtonProps) {
  const {
    label,
    children,
    disabled = DEFAULT_BUTTON_PROPS.disabled,
    size = DEFAULT_BUTTON_PROPS.size,
    onClick,
  } = props;

  if (!label) {
    throw new Error('[Button] requires a label.');
  }

  const childrenArray = [children].flat();

  const icon = findChild(childrenArray, Icon);

  const contextValue: ButtonContextValue = {
    size,
    state: { disabled },
  };

  return {
    size,
    label,
    icon,
    contextValue,
    disabled,
    onClick,
  };
}
