import getCacheDir from 'cachedir'

// Get the global cache directory
const globalCacheDir = function() {
  const cacheDir = getCacheDir()
  return cacheDir
}

// We do not use `export default` because Babel transpiles it in a way that
// requires CommonJS users to `require(...).default` instead of `require(...)`.
module.exports = globalCacheDir
