import { defineConfig } from 'rollup';

import { config } from '@chremata-preset/rollup';

const presetConfig = await config;

export default defineConfig(presetConfig);
