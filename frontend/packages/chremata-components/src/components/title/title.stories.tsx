import type { Meta, StoryObj } from '@storybook/react-vite';

import { Title } from './title';
import type { TitleProps } from './title.types';

export default {
  args: { value: 'Title', subtitleValue: 'Subtitle', level: 1 },
  component: Title,
  title: 'Title',
  id: 'title',
} as Meta<typeof Title>;

export const Default: StoryObj<typeof Title> = {
  render: (props: TitleProps) => <Title {...props} />,
};
