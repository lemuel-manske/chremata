import { type ModalService, type IdentifiableModal } from "./modal-service.types";

export function createModalService(): ModalService {
  const modals = new Map<string, IdentifiableModal>();

  const unregister = (id: string) => {
    modals.delete(id);
  };

  const register = (modal: IdentifiableModal) => {
    if (modals.has(modal.id)) {
      throw new Error(`[ModalService] Modal with id ${modal.id} is already registered.`);
    }
    
    modals.set(modal.id, modal);
  };

  const open = (id: string) => {
    const modal = modals.get(id);

    if (!modal) {
      throw new Error(`[ModalService] No modal registered with id ${id}.`);
    }
    
    modal.open();
  };

  const close = (id: string) => {
    const modal = modals.get(id);

    if (!modal) {
      throw new Error(`[ModalService] No modal registered with id ${id}.`);
    }

    modal.close();
  };

  return {
    unregister,
    register,
    open,
    close
  };
}
