import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'src',

  fullyParallel: true,

  reporter: 'html',

  use: {
    baseURL: 'http://localhost:5174',

    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5174',
    reuseExistingServer: !process.env.CI,
  },
});
