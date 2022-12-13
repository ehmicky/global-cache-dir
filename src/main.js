import { mkdir } from 'node:fs/promises'

import getCacheDir from 'cachedir'
import { pathExists } from 'path-exists'

// Get the global cache directory
const globalCacheDir = async (name) => {
  const cacheDir = getCacheDir(name)
  await createCacheDir(cacheDir)
  return cacheDir
}

export default globalCacheDir

const createCacheDir = async (cacheDir) => {
  if (await pathExists(cacheDir)) {
    return
  }

  await mkdir(cacheDir, { recursive: true })
}
