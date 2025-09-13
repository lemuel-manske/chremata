import { type LabelColor, type LabelSize } from '../label/label.types';

import {
  type DefaultButtonProps,
  type ButtonProps,
  type ButtonVariant,
  type ButtonSize,
} from './button.types';

export const DEFAULT_BUTTON_PROPS: DefaultButtonProps = {
  size: 'medium',
  variant: 'primary',
  disabled: false,
};

const COLOR_MAP: Record<ButtonVariant, LabelColor> = {
  primary: 'accent',
  secondary: 'regular',
};

const LABEL_SIZE_MAP: Record<ButtonSize, LabelSize> = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  fillAvailable: 'large',
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
  const labelSize = LABEL_SIZE_MAP[size];

  return {
    disabled,
    icon,
    label,
    labelSize,
    size,
    variant,
    color,

    onClick,
  };
}
