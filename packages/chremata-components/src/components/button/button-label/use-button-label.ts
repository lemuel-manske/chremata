import type { LabelSize, LabelVariant } from '../../label/label.types';

import type { ButtonSize } from '../button.types';
import { useButtonContext } from '../button.context';

import type { ButtonLabelProps } from './button-label.types';

const LABEL_SIZE_MAP: Record<ButtonSize, LabelSize> = {
  small: 'medium',
  medium: 'medium',
  large: 'large',
};

const LABEL_VARIANT_MAP: Record<string, LabelVariant> = {
  primary: 'regular',
  secondary: 'regular',
  silentEmphasis: 'emphasis',
};

export function useButtonLabel(props: ButtonLabelProps) {
  const { children } = props;

  const { state, color, size, variant } = useButtonContext();

  const { disabled } = state;

  const labelSize = LABEL_SIZE_MAP[size];

  const labelVariant = LABEL_VARIANT_MAP[variant];

  return {
    children,
    disabled,
    color,
    variant: labelVariant,
    size: labelSize,
  };
}
