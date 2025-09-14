import postcss from 'rollup-plugin-postcss';

import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

/**
 * @returns {Promise<import('rollup').Plugin>}
 */
export async function getPostcssConf() {
  return postcss({
    plugins: [cssnano({ plugins: [autoprefixer] })],
  });
}
