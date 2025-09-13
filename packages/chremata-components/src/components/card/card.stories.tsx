import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../label/label';
import { Card } from './card';

type CardFixtureProps = {
  title?: string;
  subtitle?: string;
  content?: string;
};

function CardFixture(props: CardFixtureProps) {
  const { title, subtitle, content } = props;

  return (
    <Card
      title={title ?? 'Title'}
      subtitle={subtitle}>
      <Card.Header />

      <Card.Body>
        <Label>{content ?? ''}</Label>
      </Card.Body>
    </Card>
  );
}

export default {
  id: 'Card',
  title: 'Card',

  component: CardFixture,

  args: {
    title: 'Card title',
    subtitle: 'Card subtitle',
    content: 'Lorem ipsum dolor...',
  },
} satisfies Meta<typeof CardFixture>;

export const Default: StoryObj<typeof CardFixture> = {
  render: args => <CardFixture {...args} />,
};
