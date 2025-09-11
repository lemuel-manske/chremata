import typescript from '@rollup/plugin-typescript';

/**
 * @returns {Promise<import('rollup').Plugin>}
 */
export async function getTypescriptConf() {
  return typescript({
    cacheDir: './node_modules/.cache/rollup-typescript-plugin/',
    noEmitOnError: true,
    noForceEmit: true,
    outDir: './dist',
    outputToFilesystem: false,
    tsconfig: './tsconfig.json',
  });
}
