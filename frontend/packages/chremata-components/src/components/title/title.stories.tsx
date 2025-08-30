import type { Meta, StoryObj } from '@storybook/react-vite';

import { Title } from './title';
import type { TitleProps } from './title.types';

export default {
  args: { value: 'Title' },
  component: Title,
  title: 'Title',
  id: 'title',
} as Meta<typeof Title>;

export const Default: StoryObj<typeof Title> = {
  render: (props: TitleProps) => <Title {...props} />,
};

export const WithSubtitle: StoryObj<typeof Title> = {
  render: (props: TitleProps) => <Title {...props} subtitleValue="Subtitle" />,
};

export const WithLevel: StoryObj<typeof Title> = {
  render: (props: TitleProps) => <Title {...props} level={2} />,
};

export const WithLongSubtitle: StoryObj<typeof Title> = {
  render: (props: TitleProps) => (
    <Title
      {...props}
      subtitleValue="This is a longer subtitle that should wrap onto one more line for demonstration purposes"
    />
  ),
};
