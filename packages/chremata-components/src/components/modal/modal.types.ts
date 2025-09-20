import * as React from "react"

import type { ModalHeaderProps } from "./modal-header/modal-header.types";

export type ModalProps = {
  /**
   * Modal identifier.
   */
  id: string;

  /**
   * Modal content.
   */
  children: React.ReactElement<ModalHeaderProps>;

  /**
   * If `true` the modal is opened. Defaults to `false`.
   */
  opened?: boolean;
}
