import * as React from 'react';

import type { ModalHeaderProps } from './modal-header/modal-header.types';

type ModalAttributes = {
  /**
   * Modal identifier.
   */
  id: string;

  /**
   * Modal content.
   */
  children: React.ReactElement<ModalHeaderProps>;

  /**
   * Whether the Modal is open or closed.
   */
  open?: boolean;
};

export type ModalProps = ModalAttributes;
