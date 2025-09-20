import * as React from "react";

import { classNames } from "@chremata/utils";

import { ModalHeader } from "./modal-header/modal-header";

import { type ModalProps } from "./modal.types";
import { useModal } from "./use-modal";

import './index.css';
import { ModalContext } from "./modal-context";

Modal.Header = ModalHeader;

export function Modal(props: ModalProps) {
  const { opened = false } = props;

  const [isOpen, setIsOpen] = React.useState(opened);

  const open = React.useCallback(() => setIsOpen(true), []);
  const close = React.useCallback(() => setIsOpen(false), []);

  const { id, header } = useModal({ ...props, open, close });

  const classes = classNames({
    'ch-modal': true,
  });

  if (!isOpen) {
    return null;
  }

  const stateValue = { id, state: { opened }};

  return (
    <ModalContext.Provider value={stateValue}>
      <div role="dialog" aria-modal="true" aria-labelledby={id} className={classes}>
        {header}
      </div>
    </ModalContext.Provider>
  )
}