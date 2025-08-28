import { defineConfig } from 'rollup';

import { getConfig } from '@chremata-preset/rollup';

const presetConfig = await getConfig();

export default defineConfig({
  ...presetConfig,
});
