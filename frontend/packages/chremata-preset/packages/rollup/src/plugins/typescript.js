import typescript from '@rollup/plugin-typescript';

/**
 * @returns {Promise<import('rollup').Plugin>}
 */
export async function getTypescriptConf() {
  return typescript({
    cacheDir: './node_modules/.cache/rollup-typescript-plugin/',
    tsconfig: './tsconfig.json',
    outDir: './dist',
    noForceEmit: true,
    noEmitOnError: true,
    outputToFilesystem: false,
  });
}
