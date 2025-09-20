import { type Meta, type StoryObj } from '@storybook/react';

import { Button } from '../button/button';

import { Modal } from './modal';

export default {
  id: 'Modal',
  title: 'Modal',

  component: Modal,
} satisfies Meta<typeof Modal>;

export const Default: StoryObj<typeof Modal> = {
  render: () => <Button label="" />,
}
