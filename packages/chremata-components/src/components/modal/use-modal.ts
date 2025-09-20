import * as React from "react";

import { type Identifiable, findChild } from "@chremata/utils";

import { type IdentifiableModal } from "../../services/modal-service/modal-service.types";

import { type ModalHeaderProps } from "./modal-header/modal-header.types";
import { ModalHeader } from "./modal-header/modal-header";

import { type ModalProps } from "./modal.types";

import { useModalServiceContext } from "./modal-service-context";

export function useModal(
  modal: IdentifiableModal & ModalProps
) {
  const { children, id, open, close } = modal;

  const modalService = useModalServiceContext();

  React.useEffect(() => {
    modalService.register({
      id,
      open,
      close,
    });

    return () => {
      modalService.unregister(id);
    }
  }, [id, open, close]);

  const childrenArray = [children].flat();

  const header = findChild(childrenArray, ModalHeader) as React.ReactElement<Identifiable<ModalHeaderProps>>;

  if (!header) {
    throw new Error(`[Modal] Modal with id ${id} is missing a Modal.Header component.`);
  }

  return {
    id,
    header
  }
};
