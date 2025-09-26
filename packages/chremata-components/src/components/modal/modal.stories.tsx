import { useArgs } from '@storybook/preview-api';

import { type Meta, type StoryObj } from '@storybook/react';

import { Button } from '../button/button';

import { Modal } from './modal';
import { type ModalProps } from './modal.types';

export default {
  id: 'Modal',
  title: 'Modal',

  component: Modal,

  args: {
    id: 'modal',
    open: false,
  },
} satisfies Meta<typeof Modal>;

export const Default: StoryObj<typeof Modal> = {
  render: (props: ModalProps) => {
    const [, updateArgs] = useArgs<ModalProps>();

    const handleOnOpen = () => {
      updateArgs({ open: true });
    };

    const handleOnClose = () => {
      updateArgs({ open: false });
    };

    return (
      <>
        <Button
          label="Open modal"
          onClick={handleOnOpen}
        />

        <Modal {...props}>
          <Modal.Header>
            <Modal.Title>Modal</Modal.Title>
            <Button
              label="Close"
              onClick={handleOnClose}
            />
          </Modal.Header>
        </Modal>
      </>
    );
  },
};
