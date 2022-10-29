import { expectError, expectType } from 'tsd'

import globalCacheDir from './main.js'

expectType<string>(await globalCacheDir('name'))
expectError(await globalCacheDir())
expectError(await globalCacheDir('name', true))
