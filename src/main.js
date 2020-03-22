import { promises } from 'fs'

import getCacheDir from 'cachedir'
import pathExists from 'path-exists'

// Get the global cache directory
const globalCacheDir = async function (name) {
  const cacheDir = getCacheDir(name)

  await createCacheDir(cacheDir)

  return cacheDir
}

const createCacheDir = async function (cacheDir) {
  if (await pathExists(cacheDir)) {
    return
  }

  await promises.mkdir(cacheDir, { recursive: true })
}

// We do not use `export default` because Babel transpiles it in a way that
// requires CommonJS users to `require(...).default` instead of `require(...)`.
module.exports = globalCacheDir
