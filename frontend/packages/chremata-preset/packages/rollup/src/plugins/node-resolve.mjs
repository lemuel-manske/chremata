import resolve from '@rollup/plugin-node-resolve';

/**
 * @returns {import('rollup').Plugin}
 */
export function getNodeResolveConf() {
  return resolve();
}
