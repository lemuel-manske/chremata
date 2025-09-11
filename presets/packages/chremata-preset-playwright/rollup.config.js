import { defineConfig } from 'rollup';

import { config as baseConfig } from '@chremata-preset/rollup';

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
