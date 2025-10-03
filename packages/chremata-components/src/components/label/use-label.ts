import { type LabelProps, type DefaultLabelProps } from './label.types';
import tokens from './label.tokens';

export const DEFAULT_LABEL_PROPS: DefaultLabelProps = {
  disabled: false,
  size: 'medium',
  variant: 'regular',
};

export function useLabel(props: LabelProps) {
  const {
    id,
    color,
    disabled = DEFAULT_LABEL_PROPS.disabled,
    size = DEFAULT_LABEL_PROPS.size,
    variant = DEFAULT_LABEL_PROPS.variant,
    children,
  } = props;

  const label = children;

  const getColor = () => {
    if (color) {
      return color;
    }

    if (disabled) {
      return tokens.color.disabled;
    }

    return tokens.color.regular;
  };

  const fontColor = getColor();
  const fontFamily = tokens.fontFamily;
  const fontSize = tokens.size[size];
  const fontWeight = tokens.fontWeight[variant];

  return {
    id,
    disabled,
    fontColor,
    fontFamily,
    fontSize,
    fontWeight,
    size,
    variant,
    label,
  };
}
