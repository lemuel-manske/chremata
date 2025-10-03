import { Label } from "../../label/label";

import type { ButtonLabelProps } from "./button-label.types";
import { useButtonLabel } from "./use-button-label";

export function ButtonLabel(props: ButtonLabelProps) {
  const { children, disabled, color, size } = useButtonLabel(props);
  
  return (
    <Label
      disabled={disabled}
      color={color}
      size={size}>
      {children}
    </Label>
  );
}