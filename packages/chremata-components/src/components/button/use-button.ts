import { findChild } from '@chremata/utils';

import { ButtonLabel } from './button-label/button-label';

import {
  type DefaultButtonProps,
  type ButtonProps,
} from './button.types';
import tokens from './button.tokens';

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

  const getColor = () => {
    const colorByVariant = tokens.variant[variant].color;

    if (disabled) {
      return colorByVariant.disabled;
    }

    return colorByVariant.default
  }

  const color = getColor();
  
  const width = tokens.fit[fit];
  
  const padding = tokens.size[size].padding;

  const background = tokens.variant[variant].background.default;
  const backgroundActive = tokens.variant[variant].background.active;
  const backgroundDisabled = tokens.variant[variant].background.disabled;
  const backgroundFocusVisible = tokens.variant[variant].background.focusVisible;
  const backgroundHover = tokens.variant[variant].background.hover;

  return {
    background,
    backgroundActive,
    backgroundDisabled,
    backgroundFocusVisible,
    backgroundHover,

    color,
    padding,
    width,

    children,
    disabled,
    label,
    size,
    variant,

    onClick,
  };
}
