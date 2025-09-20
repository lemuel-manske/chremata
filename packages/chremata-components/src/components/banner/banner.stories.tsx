import { type Meta, type StoryObj } from '@storybook/react';

import { Banner } from './banner';
import { Label } from '../label/label';

export default {
  id: 'Banner',
  title: 'Banner',

  component: Banner,
} satisfies Meta<typeof Banner>;

export const Default: StoryObj<typeof Banner> = {
  render: () => (
    <Banner>
      <Label size="xlarge" variant="emphasis">Banner</Label>

      <Label>Banner</Label>
    </Banner>
  ),
};
