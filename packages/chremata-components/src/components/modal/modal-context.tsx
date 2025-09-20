import * as React from 'react';

export type ModalState = {
  opened?: boolean;
}

export type ModalContextValue = {
  id: string;
  state: ModalState;
};

export const ModalContext = React.createContext<ModalContextValue>({
  id: '',
  state: { opened: false },
});

export function useModalContext() {
  return React.useContext(ModalContext);
}
