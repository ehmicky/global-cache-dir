import globalCacheDir from 'global-cache-dir'
import { expectError, expectType } from 'tsd'

expectType<string>(await globalCacheDir('name'))
expectError(await globalCacheDir())
expectError(await globalCacheDir('name', true))
