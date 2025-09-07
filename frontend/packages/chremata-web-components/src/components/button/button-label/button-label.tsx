import { Label } from '../../label/label';
import { useButtonContext } from '../button.context';

import {
  type ButtonLabelProps,
  type DefaultButtonLabelProps,
} from './button-label.types';

export const BUTTON_LABEL_DEFAULT_PROPS: DefaultButtonLabelProps = {
  color: 'inherit',
};

export function ButtonLabel(props: ButtonLabelProps) {
  const { children, color } = { ...BUTTON_LABEL_DEFAULT_PROPS, ...props };

  const { size } = useButtonContext();

  return (
    <Label
      size={size}
      color={color}>
      {children}
    </Label>
  );
}
