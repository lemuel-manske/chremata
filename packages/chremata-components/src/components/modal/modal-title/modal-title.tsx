import { useModalContext } from '../modal-context';

import { type ModalTitleProps } from './modal-title.types';

import { Label } from '../../label/label';

export function ModalTitle(props: ModalTitleProps) {
  const { children } = props;

  const { id } = useModalContext();

  return (
    <Label
      id={id}
      variant="emphasis"
      size="large">
      {children}
    </Label>
  );
}
