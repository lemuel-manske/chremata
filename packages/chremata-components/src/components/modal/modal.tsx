import * as React from 'react';

import { classNames } from '@chremata/utils';

import { ModalHeader } from './modal-header/modal-header';
import { ModalTitle } from './modal-title/modal-title';

import { type ModalProps } from './modal.types';
import { useModal } from './use-modal';

import './index.css';
import { ModalContext } from './modal-context';

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;

export function Modal(props: ModalProps) {
  const { id, header, open } = useModal(props);

  const currRef = React.useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    const dialog = currRef.current;

    if (!dialog) return;

    if (open) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [open]);

  const classes = classNames({
    'ch-modal': true,
  });

  const stateValue = { id, state: { open } };

  return (
    <ModalContext.Provider value={stateValue}>
      <dialog
        ref={currRef}
        aria-modal="true"
        aria-labelledby={id}
        className={classes}>
        {header}
      </dialog>
    </ModalContext.Provider>
  );
}
