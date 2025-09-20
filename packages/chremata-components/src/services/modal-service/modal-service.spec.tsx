import { expect, jest, test } from '@jest/globals';

import { createModalService } from './modal-service';

test('should throw on register modal twice', async () => {
  const ModalService = createModalService();

  const modal = {
    id: 'modal',
    open: () => {},
    close: () => {},
  };

  ModalService.register(modal);

  expect(() => ModalService.register(modal))
    .toThrow('[ModalService] Modal with id modal is already registered.');
});

test('should open unregistered modal then throw', async () => {
  const ModalService = createModalService();
  
  expect(() => ModalService.open('unregistered-modal'))
    .toThrow('[ModalService] No modal registered with id unregistered-modal.');
});

test('should open modal', async () => {
  const ModalService = createModalService();
  
  const open = jest.fn();

  const modal = {
    id: 'modal',
    open,
    close: () => {},
  };

  ModalService.register(modal);

  ModalService.open('modal');

  expect(open).toHaveBeenCalled();
});

test('should close unregistered modal then throw', async () => {
  const ModalService = createModalService();
  
  expect(() => ModalService.close('unregistered-modal'))
    .toThrow('[ModalService] No modal registered with id unregistered-modal.');
});

test('should close modal', async () => {
  const ModalService = createModalService();
  
  const close = jest.fn();

  const modal = {
    id: 'modal',
    open: () => {},
    close,
  };

  ModalService.register(modal);

  ModalService.close('modal');

  expect(close).toHaveBeenCalled();
});

test('should unregister modal', async () => {
  const ModalService = createModalService();
  
  const close = jest.fn();

  const modal = {
    id: 'modal',
    open: () => {},
    close,
  };

  ModalService.register(modal);
  ModalService.unregister('modal');

  expect(() => ModalService.close('modal'))
    .toThrow('[ModalService] No modal registered with id modal.');
});
