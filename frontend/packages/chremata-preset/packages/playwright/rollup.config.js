import { defineConfig } from 'rollup';

import { config as baseConfig } from '@chremata-preset/rollup';

const getCustomOutput = () => {
  const base = {
    generatedCode: true,
    interop: 'auto',
    sourcemap: true,
  };

  const esmOutput = {
    ...base,
    dir: 'dist',
    entryFileNames: '[name].js',
    esModule: true,
    format: 'esm',
  };

  const commonjsOutput = {
    ...base,
    dir: 'dist',
    entryFileNames: '[name].cjs',
    format: 'cjs',
  };

  return [esmOutput, commonjsOutput];
};

export default defineConfig({
  ...baseConfig,
  input: ['./src/test.ts', './src/playwright-config.ts'],
  output: getCustomOutput(),
});
