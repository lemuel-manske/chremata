import { type StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],

  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],

  typescript: {
    reactDocgen: 'react-docgen',
  },

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  core: {
    disableTelemetry: true,
    channelOptions: { allowDate: false },
  },
};

export default config;
