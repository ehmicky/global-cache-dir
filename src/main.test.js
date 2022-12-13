import test from 'ava'
import globalCacheDir from 'global-cache-dir'
import { pathExists } from 'path-exists'
import { each } from 'test-each'

const getName = () => String(Math.random()).replace('.', '')

test('should return the cache directory', async (t) => {
  const name = getName()
  const cacheDir = await globalCacheDir(name)
  t.is(typeof cacheDir, 'string')
})

test('should ensure the cache directory exists', async (t) => {
  const name = getName()
  const cacheDir = await globalCacheDir(name)
  t.true(await pathExists(cacheDir))
})

test('should work if the cache directory already exists', async (t) => {
  const name = getName()
  const cacheDir = await globalCacheDir(name)
  t.true(await pathExists(cacheDir))

  const cacheDirA = await globalCacheDir(name)
  t.true(await pathExists(cacheDirA))
})

each([undefined, '', '*'], ({ title }, name) => {
  test(`should validate name | ${title}`, async (t) => {
    await t.throwsAsync(globalCacheDir(name))
  })
})
