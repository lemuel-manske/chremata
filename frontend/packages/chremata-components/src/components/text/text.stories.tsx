import type { Meta, StoryObj } from '@storybook/react-vite';

import { Text, type TextProps, TextSize } from './text';

export default {
  args: { value: 'Sample Text', size: TextSize.REGULAR, bold: false, italic: false },
  argTypes: {
    size: {
      control: { type: 'select', labels: ['Small', 'Regular', 'Large'] },
      options: [TextSize.SMALL, TextSize.REGULAR, TextSize.LARGE],
    },
  },
  component: Text,
  title: 'Text',
  id: 'text',
} satisfies Meta<typeof Text>;

export const Default: StoryObj<typeof Text> = {
  render: (props: TextProps) => <Text {...props} />,
};
