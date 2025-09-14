import path from 'path';

import { type StorybookConfig } from '@storybook/react-vite';

const getAbsolutePath = (packageName: string): any => {
  const entry = path.join(packageName, 'package.json');
  
  return path
    .dirname(require.resolve(entry))
    .replace(/^file:\/\//, '');
};
 
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],

  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],

  typescript: {
    reactDocgen: 'react-docgen',
  },

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },

  core: {
    disableTelemetry: true,
    channelOptions: { allowDate: false },
  },
};

export default config;
