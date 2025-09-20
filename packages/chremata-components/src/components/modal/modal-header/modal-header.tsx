import * as React from 'react';

import { type ModalHeaderProps } from "./modal-header.types";
import { useModalContext } from '../modal-context';

export function ModalHeader(props: ModalHeaderProps) {
  const { children } = props;

  const { id } = useModalContext();

  return React.cloneElement(children, {
    id,
  });
}