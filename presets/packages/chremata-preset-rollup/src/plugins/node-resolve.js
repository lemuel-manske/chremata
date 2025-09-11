import resolve from '@rollup/plugin-node-resolve';

export const EXTENSIONS = ['.mts', '.ts'];

/**
 * @returns {Promise<import('rollup').Plugin>}
 */
export async function getNodeResolveConf() {
  return resolve({
    extensions: EXTENSIONS,
    preferBuiltins: true,
  });
}
