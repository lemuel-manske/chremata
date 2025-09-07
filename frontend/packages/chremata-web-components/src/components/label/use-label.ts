import { type LabelProps, type DefaultLabelProps } from './label.types';

export const DEFAULT_LABEL_PROPS: DefaultLabelProps = {
  disabled: false,
  size: 'medium',
  variant: 'regular',
  color: 'inherit',
};

export function useLabel(props: LabelProps) {
  const {
    id,
    disabled = DEFAULT_LABEL_PROPS.disabled,
    size = DEFAULT_LABEL_PROPS.size,
    color = DEFAULT_LABEL_PROPS.color,
    variant = DEFAULT_LABEL_PROPS.variant,
    children,
  } = props;

  const label = children;

  return {
    id,
    disabled,
    size,
    color,
    variant,
    label,
  };
}
