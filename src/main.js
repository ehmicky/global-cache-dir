import getCacheDir from 'cachedir'
import pathExists from 'path-exists'
import makeDir from 'make-dir'

// Get the global cache directory
const globalCacheDir = async function(name) {
  const cacheDir = getCacheDir(name)

  await createCacheDir(cacheDir)

  return cacheDir
}

const createCacheDir = async function(cacheDir) {
  if (await pathExists(cacheDir)) {
    return
  }

  // TODO: replace with `util.promisify(fs.mkdir)(cacheDir, {recursive: true})`
  // after dropping support for Node 8/9
  await makeDir(cacheDir)
}

// We do not use `export default` because Babel transpiles it in a way that
// requires CommonJS users to `require(...).default` instead of `require(...)`.
module.exports = globalCacheDir
