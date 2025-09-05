import { html } from 'lit';

import type { Meta, StoryObj } from '@storybook/web-components';

import './table.js';

export default {
  component: 'ch-table',
  id: 'Table',
  title: 'Table',

  args: {
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'age', label: 'Age' },
      { key: 'city', label: 'City' },
    ],

    data: [
      { name: 'John Doe', age: 28, city: 'New York' },
      { name: 'Jane Smith', age: 34, city: 'Los Angeles' },
      { name: 'Sam Johnson', age: 45, city: 'Chicago' },
    ],
  },
} as Meta;

export const Default: StoryObj = {
  render: (args) => html`<ch-table .data=${args.data} .columns=${args.columns} />`,
};
