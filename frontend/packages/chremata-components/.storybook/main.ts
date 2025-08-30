import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],

  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};
export default config;
