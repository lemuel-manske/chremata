import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import perfectionist from 'eslint-plugin-perfectionist';
import tseslint from 'typescript-eslint';

function commonPlugins() {
  return {
    '@typescript-eslint': tseslint.plugin,

    perfectionist: perfectionist,
    prettier: prettier,
    react: react,
  };
}

/**
 * @type {import('@eslint/config-helpers').Config}
 */
export default [
  {
    ignores: ['**/dist', '**/node_modules'],
  },
  {
    languageOptions: {
      parser: tseslint.parser,
    },

    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },

    plugins: commonPlugins(),

    rules: {
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,

      'perfectionist/sort-objects': 'warn',
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
