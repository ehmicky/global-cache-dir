import { expectError, expectType } from 'tsd'

import globalCacheDir from 'global-cache-dir'

expectType<string>(await globalCacheDir('name'))
expectError(await globalCacheDir())
expectError(await globalCacheDir('name', true))
