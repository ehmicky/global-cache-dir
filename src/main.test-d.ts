import globalCacheDir from 'global-cache-dir'
import { expectType } from 'tsd'


expectType<string>(await globalCacheDir('name'))
// @ts-expect-error
await globalCacheDir()
// @ts-expect-error
await globalCacheDir('name', true)
