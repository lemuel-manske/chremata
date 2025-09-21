import * as React from 'react';

import { findChild } from '@chremata/utils';

import { Button } from '../../button/button';
import { ModalTitle } from '../modal-title/modal-title';

import { type ModalHeaderProps } from './modal-header.types';

export function useModalHeader(props: ModalHeaderProps) {
  const { children } = props;

  const childrenArray = [children].flat();

  const title = findChild(childrenArray, ModalTitle);
  const button = findChild(childrenArray, Button);

  if (!title) {
    throw new Error(
      `[Modal.Header] Modal.Header is missing a Modal.Title component as a child.`
    );
  }

  return {
    title,
    button,
  };
}
