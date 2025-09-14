import { config as swcConfig } from '@chremata-preset/swc';

const config = {
  injectGlobals: true,

  resetModules: true,
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    environment: 'jsdom',
  },

  testMatch: ['**/*/*.spec.tsx'],

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

export { config };
