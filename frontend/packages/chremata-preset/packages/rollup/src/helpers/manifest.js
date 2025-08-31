import url from 'node:url';

export function getPackagePath() {
  return process.cwd();
}

/**
 * @typedef {Object} PackageJson
 * @property {string} name - The package name
 * @property {Object.<string, string>} [dependencies] - The package dependencies
 * @property {Object.<string, string>} [devDependencies] - The package devDependencies
 * @property {Object.<string, string>} [peerDependencies] - The package peerDependencies
 */

/**
 * @param {string=} packageName
 * @returns {Promise<PackageJson>}
 */
export async function getPackageFile(packageName) {
  const packagePath = packageName ?? url.pathToFileURL(getPackagePath()).href;

  const { default: module } = await /** @type {Promise<{default: PackageJson}>} */ (
    import(`${packagePath}/package.json`, {
      assert: { type: 'json' },
      with: { type: 'json' },
    })
  );

  return module;
}

export async function getPeerDependencies() {
  const pkg = await getPackageFile();

  return Object.keys(pkg.peerDependencies ?? []);
}
