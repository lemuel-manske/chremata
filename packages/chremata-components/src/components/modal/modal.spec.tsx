import { expect, test } from '@jest/globals';
import { render, screen, act } from '@testing-library/react';

import { createModalService } from '../../services/modal-service/modal-service';
import { Modal } from './modal';
import { Label } from '../label/label';
import { ModalServiceProvider } from './modal-service-context';

test('should open modal', async () => {
  const ModalService = createModalService();
  
  render(
    <ModalServiceProvider service={ModalService}>
      <Modal id="modal">
        <Modal.Header>
          <Label>Modal</Label>
        </Modal.Header>
      </Modal>
    </ModalServiceProvider>,
  )

  act(() => {
    ModalService.open('modal');
  });

  const modal = screen.getByRole('dialog', { name: 'Modal' });

  expect(modal).toBeVisible();
});

test('should open and close modal', async () => {
  const ModalService = createModalService();
  
  render(
    <ModalServiceProvider service={ModalService}>
      <Modal id="modal">
        <Modal.Header>
          <Label>Modal</Label>
        </Modal.Header>
      </Modal>
    </ModalServiceProvider>,
  )

  act(() => {
    ModalService.open('modal');
  });

  const modal = screen.getByRole('dialog', { name: 'Modal' });

  expect(modal).toBeVisible();

  act(() => {
    ModalService.close('modal');
  });

  expect(modal).not.toBeVisible();
});
