import { type PlaywrightTestConfig, devices } from '@playwright/test';

import merge from 'lodash.merge';

const getBaseConfig = (): PlaywrightTestConfig => ({
  testDir: './src',
  testMatch: /.*\.ui\.test\.ts?$/,

  timeout: 10 * 1000,
  fullyParallel: true,

  workers: '50%',

  reporter: 'html',

  use: {
    screenshot: 'on',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});

const getConfig = (customConfig: PlaywrightTestConfig = {}) => {
  return merge(getBaseConfig(), customConfig);
};

export { getConfig };
