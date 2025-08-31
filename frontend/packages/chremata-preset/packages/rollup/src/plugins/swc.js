import swc from '@rollup/plugin-swc';

import { config } from '@chremata-preset/swc';

/**
 * @returns {Promise<import('rollup').Plugin>}
 */
export async function getSwcConf() {
  return swc({ swc: config });
}
