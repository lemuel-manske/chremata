import { config as swcConfig } from '@chremata-preset/swc';

/**
 * @type {import('jest').Config}
 */
const config = {
  injectGlobals: true,

  resetModules: true,

  testMatch: ['**/*/*.spec.tsx', '**/*/*.spec.ts'],

  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        ...swcConfig,
        env: {
          targets: { node: process.versions.node },
        },
        minify: false,
        sourceMaps: 'inline',
      },
    ],

    '^.+\\.css$': 'jest-transform-css',
  },
};

export default config;
