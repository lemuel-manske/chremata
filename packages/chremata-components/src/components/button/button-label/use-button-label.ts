import type { LabelSize } from "../../label/label.types";

import type { ButtonSize } from "../button.types";
import { useButtonContext } from "../button.context";

import type { ButtonLabelProps } from "./button-label.types";

const LABEL_SIZE_MAP: Record<ButtonSize, LabelSize> = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

export function useButtonLabel(props: ButtonLabelProps) {
  const {
    children,
  } = props;

  const { state, variant, color, size } = useButtonContext();

  const { disabled } = state;

  const labelSize = LABEL_SIZE_MAP[size];

  return {
    children,
    disabled,
    color,
    size: labelSize,
  };
}
