import { Label } from '../../label/label';

import type { ButtonLabelProps } from './button-label.types';
import { useButtonLabel } from './use-button-label';

export function ButtonLabel(props: ButtonLabelProps) {
  const { children, disabled, color, variant, size } = useButtonLabel(props);

  return (
    <Label
      variant={variant}
      disabled={disabled}
      color={color}
      size={size}>
      {children}
    </Label>
  );
}
