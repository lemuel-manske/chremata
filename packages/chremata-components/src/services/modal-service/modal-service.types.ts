import * as React from "react";

import { type ModalProps } from "../../components/modal/modal.types";
import type { Identifiable } from "@chremata/utils";

export type ModalComponent = React.ReactElement<ModalProps>;

type Closeable = {
  /**
   * Closes the modal.
   */
  close: () => void;
};

type Openable = {
  /**
   * Opens the modal.
   */
  open: () => void;
};

export type IdentifiableModal = Identifiable<Closeable & Openable>;

export type ModalService = {
  /**
   * Registers a modal for later use.
   */
  register: (modal: IdentifiableModal) => void;

  /**
   * Unregister a modal by its ID.
   */
  unregister: (id: string) => void;

  /**
   * Opens a registered modal by its ID.
   */
  open: (id: string) => void;

  /**
   * Closes a registered modal by its ID.
   */
  close: (id: string) => void;
};
