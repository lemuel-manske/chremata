import * as React from 'react';

export type PanelContextValue = {
  labelId: string;
  tableId: string;
};

export const PanelContext = React.createContext<PanelContextValue>({
  labelId: '',
  tableId: '',
});

export function usePanelContext() {
  return React.useContext(PanelContext);
}
