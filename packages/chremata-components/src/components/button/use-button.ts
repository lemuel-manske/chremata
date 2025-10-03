import { findChild } from '@chremata/utils';

import {
  type DefaultButtonProps,
  type ButtonProps,
  type ButtonVariant,
} from './button.types';
import { ButtonLabel } from './button-label/button-label';

const COLOR_MAP: Record<ButtonVariant, string> = {
  primary: 'var(--font-color--dark)',
  secondary: 'var(--font-color--light)',
};

export const DEFAULT_BUTTON_PROPS: DefaultButtonProps = {
  size: 'medium',
  variant: 'primary',
  disabled: false,
  fit: 'fitContent',
};

export function useButton(props: ButtonProps) {
  const {
    disabled = DEFAULT_BUTTON_PROPS.disabled,
    fit = DEFAULT_BUTTON_PROPS.fit,
    children,
    variant = DEFAULT_BUTTON_PROPS.variant,
    size = DEFAULT_BUTTON_PROPS.size,

    onClick,
  } = props;

  const childrenArray = [children].flat();

  const labelElement = findChild(childrenArray, ButtonLabel);

  if (!labelElement) {
    throw new Error('[Button] requires a label.');
  }

  const label = labelElement.props.children;

  const color = COLOR_MAP[variant];

  return {
    children,
    color,
    disabled,
    fit,
    label,
    size,
    variant,

    onClick,
  };
}
