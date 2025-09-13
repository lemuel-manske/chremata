import commonjs from '@rollup/plugin-commonjs';

/**
 * @returns {Promise<import('rollup').Plugin>}
 */
export async function getCommonJsConf() {
  return commonjs();
}
