import { test, expect } from '@chremata-preset/playwright/test';

import { Modal } from './modal';

import { Button } from '../button/button';

const tag = ['@ch-modal'];

test('should render an opened Modal', { tag }, async ({ mount, page }) => {
  await mount(
    <Modal
      id="modal"
      open>
      <Modal.Header>
        <Modal.Title>Modal</Modal.Title>
      </Modal.Header>
    </Modal>
  );

  const modal = page.getByRole('dialog', { name: 'Modal' });

  await expect(modal).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test('should render a closed Modal', { tag }, async ({ mount, page }) => {
  await mount(
    <Modal id="modal">
      <Modal.Header>
        <Modal.Title>Modal</Modal.Title>
      </Modal.Header>
    </Modal>
  );

  const modal = page.getByRole('dialog', { name: 'Modal' });

  await expect(modal).toNotHaveAccessibilityViolations();
  await expect(page).toHaveScreenshot();
});

test(
  'should render header with Modal.Title and Button',
  { tag },
  async ({ mount, page }) => {
    await mount(
      <Modal
        id="modal"
        open>
        <Modal.Header>
          <Modal.Title>Modal</Modal.Title>
          <Button label="Close" />
        </Modal.Header>
      </Modal>
    );

    const modal = page.getByRole('dialog', { name: 'Modal' });

    await expect(modal).toNotHaveAccessibilityViolations();
    await expect(page).toHaveScreenshot();
  }
);
