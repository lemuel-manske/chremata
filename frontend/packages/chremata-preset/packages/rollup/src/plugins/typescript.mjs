import typescript from "@rollup/plugin-typescript";

/**
 * @returns {import('rollup').Plugin}
 */
export function getTypescriptConf() {
  return typescript({
    tsconfig: "./tsconfig.json",
    declaration: false,
  });
}
