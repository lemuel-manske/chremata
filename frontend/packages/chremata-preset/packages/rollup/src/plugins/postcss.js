import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import postcssUrl from 'postcss-url';

/**
 * @returns {Promise<import('rollup').Plugin>}
 */
export async function getPostcssConf() {
  return postcss({
    to: 'dist/[name][extname]',
    extract: true,
    plugins: [
      postcssImport(),
      postcssUrl({
        url: 'copy',
        include: ['**/*.woff', '**/*.woff2'],
      }),
    ],
  });
}
