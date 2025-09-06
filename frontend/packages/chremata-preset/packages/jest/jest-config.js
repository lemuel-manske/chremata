import { config as swcConfig } from '@chremata-preset/swc';

const config = {
  injectGlobals: true,
  resetModules: true,

  testEnvironment: 'jsdom',
  testMatch: ['**/*/*.spec.tsx'],

  testEnvironmentOptions: {
    environment: 'jsdom',
  },

  transform: {
    '^.+\\.css$': 'jest-transform-css',

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
  },
};

export { config };
