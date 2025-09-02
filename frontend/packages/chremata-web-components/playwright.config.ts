import { type PlaywrightTestConfig, defineConfig } from '@playwright/test';

import { getConfig } from '@chremata-preset/playwright/config';

const URL = 'http://localhost:5173';

const customConfig: PlaywrightTestConfig = {
  webServer: {
    command: 'npm run start:e2e',
    url: URL,
    timeout: 10 * 1000,
  },

  use: {
    baseURL: URL,
  },
};

export default defineConfig(getConfig(customConfig));
