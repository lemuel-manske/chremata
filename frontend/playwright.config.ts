import { defineConfig } from '@playwright/test';

import 'node:process';

export default defineConfig({
  testDir: './e2e-tests',
  fullyParallel: true,

  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  testMatch: 'e2e-tests/*.spec.ts',

  use: {
    baseURL: 'http://localhost:3000',
    browserName: 'chromium',
    trace: 'on-first-retry',
    headless: true,
  },
});
