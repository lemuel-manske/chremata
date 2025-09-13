import { defineConfig } from '@playwright/experimental-ct-react';

import { getConfig } from '@chremata-preset/playwright/config';

const presetConfig = getConfig();

export default defineConfig(presetConfig);
