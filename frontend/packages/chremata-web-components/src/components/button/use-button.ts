import { type LabelColor } from '../label/label.types';

import { type DefaultButtonProps, type ButtonProps, type ButtonVariant } from './button.types';

export const DEFAULT_BUTTON_PROPS: DefaultButtonProps = {
  size: 'medium',
  variant: 'primary',
  disabled: false,
};

const COLOR_MAP: Record<ButtonVariant, LabelColor> ={
  primary: 'accent',
  secondary: 'regular',
}

export function useButton(props: ButtonProps) {
  const {
    disabled = DEFAULT_BUTTON_PROPS.disabled,
    icon,
    label,
    variant = DEFAULT_BUTTON_PROPS.variant,
    size = DEFAULT_BUTTON_PROPS.size,

    onClick,
  } = props;

  if (!label) {
    throw new Error('[Button] requires a label.');
  }

  const color = COLOR_MAP[variant];

  return {
    disabled,
    icon,
    label,
    size,
    variant,
    color,

    onClick,
  };
}
