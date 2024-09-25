# mochapack-node-playground

Played with mochapack, but later switched to [instant-mocha](https://github.com/privatenumber/instant-mocha)

## Install

```sh
pnpm i -D instant-mocha mocha webpack webpack-node-externals swc-loader
```

```sh
npm run test:r
npm run test:w
```

## Issues

- Doesn work with mocha 10 ValidationError: configuration.entry['unmatchedFiles'] should be a non-empty array https://github.com/privatenumber/instant-mocha/issues/53

- swc `module.noInterop: true` should remove `__esModule` and make assertion showing
  correct line number

- restart in monorepo?
  Yes. With help of `workspace-alias` it possible to change source code of workspace lib (it will be included in bundle).
