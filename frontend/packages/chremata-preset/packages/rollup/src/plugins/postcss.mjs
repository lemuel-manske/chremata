import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import postcssUrl from "postcss-url";

/**
 * @returns {import('rollup').Plugin}
 */
export function getPostcssConf() {
  return postcss({
    to: "dist/[name][extname]",
    extract: true,
    plugins: [
      postcssImport(),
      postcssUrl({
        url: "copy",
        include: ["**/*.woff", "**/*.woff2"],
      }),
    ],
  });
}
