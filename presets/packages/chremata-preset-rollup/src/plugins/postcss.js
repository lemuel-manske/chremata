import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import postcssUrl from 'postcss-url';

/**
 * @returns {Promise<import('rollup').Plugin>}
 */
export async function getPostcssConf() {
  return postcss({
    extract: true,
    plugins: [
      postcssImport(),
      postcssUrl({
        include: ['**/*.woff', '**/*.woff2'],
        url: 'copy',
      }),
    ],
    to: 'dist/[name][extname]',
  });
}
