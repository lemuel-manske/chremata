import { type IconProps, type IconDefaultProps } from './icon.types';
import tokens from './icon.tokens';

export const DEFAULT_ICON_PROPS: IconDefaultProps = {
  size: 'medium',
  disabled: false,
  pointer: 'default',
};

export function useIcon(props: IconProps) {
  const {
    label,
    name,
    size = DEFAULT_ICON_PROPS.size,
    disabled = DEFAULT_ICON_PROPS.disabled,
    pointer = DEFAULT_ICON_PROPS.pointer,

    ...svgProps
  } = props;

  const pointerOrDisabled = disabled ? tokens.pointer.disabled : pointer;
  const iconSize = tokens.size[size];

  return {
    label,
    name,
    size: iconSize,
    disabled,
    pointer: pointerOrDisabled,

    ...svgProps,
  };
}
