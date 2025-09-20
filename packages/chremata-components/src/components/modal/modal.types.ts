import * as React from "react"

export type ModalProps = {
  /**
   * Modal identifier.
   */
  id: string;

  /**
   * Modal content.
   */
  children: React.ReactElement | React.ReactElement[];
}
