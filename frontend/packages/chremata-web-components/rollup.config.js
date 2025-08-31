import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import postcssUrl from 'postcss-url';

export default {
  input: 'src/index.mts',

  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.mjs',
      format: 'esm',
      sourcemap: true,
    },
  ],

  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: false,
    }),
    postcss({
      to: 'dist/[name][extname]',
      extract: true,
      plugins: [
        postcssImport(),
        postcssUrl({
          url: 'copy',
          include: ['**/*.woff', '**/*.woff2', '**/*.ttf'],
        }),
      ],
    }),
  ],

  external: [],
};
