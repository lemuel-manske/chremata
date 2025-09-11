import json from '@rollup/plugin-json';

/**
 * @returns {Promise<import('rollup').Plugin>}
 */
export async function getJsonConf() {
  return json({ preferConst: true });
}
