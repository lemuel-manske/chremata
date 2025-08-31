import commonjs from "@rollup/plugin-commonjs";

/**
 * @returns {import('rollup').Plugin}
 */
export function getCommonJsConf() {
  return commonjs();
}
