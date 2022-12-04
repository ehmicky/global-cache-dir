import { expectType } from 'tsd'

import globalCacheDir from 'global-cache-dir'

expectType<string>(await globalCacheDir('name'))
// @ts-expect-error
await globalCacheDir()
// @ts-expect-error
await globalCacheDir('name', true)
