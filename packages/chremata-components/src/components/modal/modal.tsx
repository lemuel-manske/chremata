import { classNames } from "@chremata/utils";

import { type ModalProps } from "./modal.types";

import './index.css';

export function Modal(props: ModalProps) {
  const { children } = props;

  const classes = classNames({
    'ch-modal': true,
  });

  return (
    <div role="modal" className={classes}>
      {children}
    </div>
  )
}