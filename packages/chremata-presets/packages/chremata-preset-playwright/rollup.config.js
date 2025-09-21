import { defineConfig } from 'rollup';

import { default as getConfig } from '@chremata-preset/rollup';

const baseConfig = await getConfig();

const getCustomOutput = () => {
  const esmOutput = {
    dir: 'dist',
    entryFileNames: '[name].js',
    esModule: true,
    format: 'esm',
    generatedCode: true,
    interop: 'auto',
    sourcemap: true,
  };

  return [esmOutput];
};

export default defineConfig({
  ...baseConfig,
  input: ['./src/test.ts', './src/playwright-config.ts'],
  output: getCustomOutput(),
});
