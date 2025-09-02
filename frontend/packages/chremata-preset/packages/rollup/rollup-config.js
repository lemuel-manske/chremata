import { getNodeResolveConf } from './src/plugins/node-resolve.js';
import { getCommonJsConf } from './src/plugins/commonjs.js';
import { getTypescriptConf } from './src/plugins/typescript.js';
import { getPostcssConf } from './src/plugins/postcss.js';
import { getJsonConf } from './src/plugins/json.js';
import { getSwcConf } from './src/plugins/swc.js';

import { getPeerDependencies } from './src/helpers/manifest.js';

/**
 * @type {Promise<import('rollup').RollupOptions>}
 */
async function getConfig() {
  return {
    input: 'src/index.ts',

    cache: false,

    output: [
      {
        file: 'dist/index.cjs',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],

    plugins: [
      await getPostcssConf(),
      await getJsonConf(),
      await getSwcConf(),
      await getCommonJsConf(),
      await getNodeResolveConf(),
      await getTypescriptConf(),
    ],

    external: await getPeerDependencies(),
  };
}

const config = getConfig();

export { config };
