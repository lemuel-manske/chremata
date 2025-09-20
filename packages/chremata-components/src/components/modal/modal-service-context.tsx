import * as React from "react";

import { type ModalService } from "../../services/modal-service/modal-service.types";

type ModalProviderProps = {
  children: React.ReactNode;
  service: ModalService;
};

export const ModalServiceContext = React.createContext<ModalService>({
  register: () => {},
  unregister: () => {},
  open: () => {},
  close: () => {}
});

export function ModalServiceProvider({
  children,
  service,
}: ModalProviderProps) {
  return (
    <ModalServiceContext.Provider value={service}>
      {children}
    </ModalServiceContext.Provider>
  );
}

export function useModalServiceContext() {
  const service = React.useContext(ModalServiceContext);

  if (!service) {
    throw new Error("[useModalService] Context must be used within a `ModalServiceProvider`");
  }

  return service;
}