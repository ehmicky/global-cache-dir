[![Node](https://img.shields.io/badge/-Node.js-808080?logo=node.js&colorA=404040&logoColor=66cc33)](https://www.npmjs.com/package/global-cache-dir)
[![TypeScript](https://img.shields.io/badge/-Typed-808080?logo=typescript&colorA=404040&logoColor=0096ff)](/src/main.d.ts)
[![Codecov](https://img.shields.io/badge/-Tested%20100%25-808080?logo=codecov&colorA=404040)](https://codecov.io/gh/ehmicky/global-cache-dir)
[![Mastodon](https://img.shields.io/badge/-Mastodon-808080.svg?logo=mastodon&colorA=404040&logoColor=9590F9)](https://fosstodon.org/@ehmicky)
[![Medium](https://img.shields.io/badge/-Medium-808080.svg?logo=medium&colorA=404040)](https://medium.com/@ehmicky)

Get the global cache directory.

Ensures the directory exists.

The cache directory location is OS-specific.

# Hire me

Please
[reach out](https://www.linkedin.com/feed/update/urn:li:activity:7117265228068716545/)
if you're looking for a Node.js API or CLI engineer (11 years of experience).
Most recently I have been [Netlify Build](https://github.com/netlify/build)'s
and [Netlify Plugins](https://www.netlify.com/products/build/plugins/)'
technical lead for 2.5 years. I am available for full-time remote positions.

# Example

```js
import globalCacheDir from 'global-cache-dir'

const cacheDir = await globalCacheDir('myapp')
// Depending on the OS:
//  => '/Users/ehmicky/Library/Caches/myapp'
//  => '/home/ehmicky/.cache/myapp'
//  => 'C:\Users\ehmicky\AppData\Local\myapp\Cache'
```

# Install

```bash
npm install global-cache-dir
```

This package works in Node.js >=18.18.0.

This is an ES module. It must be loaded using
[an `import` or `import()` statement](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c),
not `require()`. If TypeScript is used, it must be configured to
[output ES modules](https://www.typescriptlang.org/docs/handbook/esm-node.html),
not CommonJS.

# Usage

## globalCacheDir(name)

`name`: `string`\
_Returns_: `Promise<string>`

`name` must only use digits, letters or dashes.

# See also

- [`node-cachedir`](https://github.com/LinusU/node-cachedir): underlying logic
  for this module
- [`find-cache-dir`](https://github.com/avajs/find-cache-dir): get the local
  cache directory

# Support

For any question, _don't hesitate_ to [submit an issue on GitHub](../../issues).

Everyone is welcome regardless of personal background. We enforce a
[Code of conduct](CODE_OF_CONDUCT.md) in order to promote a positive and
inclusive environment.

# Contributing

This project was made with ❤️. The simplest way to give back is by starring and
sharing it online.

If the documentation is unclear or has a typo, please click on the page's `Edit`
button (pencil icon) and suggest a correction.

If you would like to help us fix a bug or add a new feature, please check our
[guidelines](CONTRIBUTING.md). Pull requests are welcome!

<!-- Thanks go to our wonderful contributors: -->

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- prettier-ignore -->
<!--
<table><tr><td align="center"><a href="https://fosstodon.org/@ehmicky"><img src="https://avatars2.githubusercontent.com/u/8136211?v=4" width="100px;" alt="ehmicky"/><br /><sub><b>ehmicky</b></sub></a><br /><a href="https://github.com/ehmicky/global-cache-dir/commits?author=ehmicky" title="Code">💻</a> <a href="#design-ehmicky" title="Design">🎨</a> <a href="#ideas-ehmicky" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/ehmicky/global-cache-dir/commits?author=ehmicky" title="Documentation">📖</a></td></tr></table>
-->
<!-- ALL-CONTRIBUTORS-LIST:END -->
