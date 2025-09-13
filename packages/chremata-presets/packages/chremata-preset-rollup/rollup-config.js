import { getNodeResolveConf } from './src/plugins/node-resolve.js';
import { getCommonJsConf } from './src/plugins/commonjs.js';
import { getTypescriptConf } from './src/plugins/typescript.js';
import { getPostcssConf } from './src/plugins/postcss.js';
import { getJsonConf } from './src/plugins/json.js';
import { getSwcConf } from './src/plugins/swc.js';
import { getUrlConf } from './src/plugins/url.js';

import { getPeerDependencies } from './src/helpers/manifest.js';

/**
 * @type {Promise<import('rollup').RollupOptions>}
 */
async function getConfig() {
  return {
    cache: false,

    external: await getPeerDependencies(),

    input: 'src/index.ts',

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
      await getUrlConf(),
    ],
  };
}

/**
 * @type {Promise<import('rollup').RollupOptions>}
 */
const config = await getConfig();

export { config };
