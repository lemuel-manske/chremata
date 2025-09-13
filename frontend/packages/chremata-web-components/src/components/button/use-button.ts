import { type DefaultButtonProps, type ButtonProps } from './button.types';

export const DEFAULT_BUTTON_PROPS: DefaultButtonProps = {
  size: 'medium',
  variant: 'primary',
  disabled: false,
};

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

  return {
    disabled,
    icon,
    label,
    size,
    variant,

    onClick,
  };
}
