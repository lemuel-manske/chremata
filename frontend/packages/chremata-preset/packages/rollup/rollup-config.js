import { getNodeResolveConf } from './src/plugins/node-resolve.mjs';
import { getCommonJsConf } from './src/plugins/commonjs.mjs';
import { getTypescriptConf } from './src/plugins/typescript.mjs';
import { getPostcssConf } from './src/plugins/postcss.mjs';

/**
 * @type {import('rollup').RollupOptions}
 */
export const getConfig = () => ({
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

  plugins: [getNodeResolveConf(), getCommonJsConf(), getTypescriptConf(), getPostcssConf()],

  external: [],
});
