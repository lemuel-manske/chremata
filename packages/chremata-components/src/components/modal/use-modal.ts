import * as React from 'react';

import { type Identifiable, findChild } from '@chremata/utils';

import { type ModalHeaderProps } from './modal-header/modal-header.types';
import { ModalHeader } from './modal-header/modal-header';

import { type ModalProps } from './modal.types';
import tokens from './modal.tokens';

export function useModal(props: ModalProps) {
  const { children, id, open } = props;

  const childrenArray = [children].flat();

  const header = findChild(childrenArray, ModalHeader) as React.ReactElement<
    Identifiable<ModalHeaderProps>
  >;

  if (!header) {
    throw new Error(
      `[Modal] Modal with id ${id} is missing a Modal.Header component.`
    );
  }

  const backgroundColor = tokens.background.color;
  const backgroundBackdropColor = tokens.backdrop.background.color;

  return {
    backgroundColor,
    backgroundBackdropColor,
    id,
    header,
    open,
  };
}
