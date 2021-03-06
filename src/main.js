import { promises as fs } from 'fs'

import getCacheDir from 'cachedir'
import pathExists from 'path-exists'

// Get the global cache directory
export default async function globalCacheDir(name) {
  const cacheDir = getCacheDir(name)
  await createCacheDir(cacheDir)
  return cacheDir
}

const createCacheDir = async function (cacheDir) {
  if (await pathExists(cacheDir)) {
    return
  }

  await fs.mkdir(cacheDir, { recursive: true })
}
