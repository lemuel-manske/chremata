import url from '@rollup/plugin-url';

/**
 * @returns {Promise<import('rollup').Plugin>}
 */
export async function getUrlConf() {
  return url();
}
