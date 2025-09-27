import { devices } from '@playwright/test';

import { type PlaywrightTestConfig } from '@playwright/experimental-ct-react';

import merge from 'lodash.merge';

const getBaseConfig = (): PlaywrightTestConfig => ({
  expect: {
    toHaveScreenshot: {
      threshold: 0.1,
    },
  },
  
  testDir: './',
  testMatch: /.*\.ui\.test\.tsx?$/,

  snapshotPathTemplate:
    '{testDir}/{testFileDir}/__screenshots__/{projectName}/{testName}{ext}',

  timeout: 10 * 1000,
  fullyParallel: true,

  workers: '50%',

  reporter: 'html',

  use: {
    ctPort: 3100,
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

const getConfig = (
  customConfig: PlaywrightTestConfig = {}
): PlaywrightTestConfig => {
  return merge(getBaseConfig(), customConfig);
};

export { getConfig };
