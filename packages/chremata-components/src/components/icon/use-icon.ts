import { type IconProps, type IconDefaultProps } from './icon.types';

export const DEFAULT_ICON_PROPS: IconDefaultProps = {
  size: 'medium',
  disabled: false,
};

export function useIcon(props: IconProps) {
  const {
    label,
    name,
    size = DEFAULT_ICON_PROPS.size,
    disabled = DEFAULT_ICON_PROPS.disabled,

    ...svgProps
  } = props;

  return {
    label,
    name,
    size,
    disabled,
    
    ...svgProps,
  };
}
