import typescript from '@rollup/plugin-typescript';

/**
 * @returns {Promise<import('rollup').Plugin>}
 */
async function getTypescriptPlugin() {
  return typescript({
    outDir: './dist',
    tsconfig: './tsconfig.json',
  });
}

/**
 * @returns {import('rollup').OutputOptions}
 */
function getOutputConfigForESM() {
  return {
    sourcemap: true,
    esModule: true,
    file: 'dist/index.js',
    generatedCode: 'es2015',
    interop: 'auto',
    format: 'esm',
  };
}

/**
 * @returns {Promise<import('rollup').RollupOptions>}
 */
async function getConfig() {
  return {
    input: 'src/index.ts',

    output: {
      ...getOutputConfigForESM(),
    },

    plugins: [getTypescriptPlugin()],
  };
}

export { getConfig };
