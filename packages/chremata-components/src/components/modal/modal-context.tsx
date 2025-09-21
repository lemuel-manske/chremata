import * as React from 'react';

export type ModalState = {
  open?: boolean;
};

export type ModalContextValue = {
  id: string;
  state: ModalState;
};

export const ModalContext = React.createContext<ModalContextValue>({
  id: '',
  state: { open: false },
});

export function useModalContext() {
  return React.useContext(ModalContext);
}
