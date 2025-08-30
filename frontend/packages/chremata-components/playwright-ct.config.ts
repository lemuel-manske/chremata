import type { PlaywrightTestConfig } from '@playwright/experimental-ct-react';

import { defineConfig, devices } from '@playwright/experimental-ct-react';

const getConfig = (): PlaywrightTestConfig => ({
  testDir: './',
  testMatch: /.*\.ui\.test\.tsx?$/,

  snapshotDir: './__snapshots__',
  timeout: 10 * 1000,
  fullyParallel: true,

  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,

  workers: '50%',

  reporter: 'html',

  use: {
    ctPort: 3100,
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

export default defineConfig(getConfig());
