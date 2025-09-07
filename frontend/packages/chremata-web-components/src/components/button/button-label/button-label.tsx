import { Label } from '../../label/label';
import { useButtonContext } from '../button.context';

import { type ButtonLabelProps } from './button-label.types';

export function ButtonLabel(props: ButtonLabelProps) {
  const { children } = props;

  const { size } = useButtonContext();

  return (
    <Label size={size} color="white">
      {children}
    </Label>
  );
}
