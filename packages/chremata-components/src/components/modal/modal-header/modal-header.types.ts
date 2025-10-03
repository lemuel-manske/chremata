import * as React from 'react';

import { type ButtonProps } from '../../button/button.types';
import { type ModalTitleProps } from '../modal-title/modal-title.types';

export type ModalHeaderProps = {
  /**
   * Modal header children.
   */
  children:
    | React.ReactElement<ModalTitleProps>
    | [React.ReactElement<ModalTitleProps>, React.ReactElement<ButtonProps>];
};
