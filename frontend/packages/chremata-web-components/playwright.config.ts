import { type PlaywrightTestConfig, defineConfig } from '@playwright/test';

import { getConfig } from '@chremata-preset/playwright/config';

const customConfig: PlaywrightTestConfig = {
  use: {
    baseURL: 'http://localhost:5173',
  },

  webServer: {
    command: 'npm run start:preview',
    url: 'http://localhost:5173',
    stdout: 'ignore',
    stderr: 'pipe',
  },
};

export default defineConfig(getConfig(customConfig));
