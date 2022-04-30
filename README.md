# mochapack-node-playground

Playing with mochapack

## Install

```sh
pnpm i -D mochapack mocha webpack env-bool webpack-node-externals swc-loader
```

```sh
npm run test:r
npm run test:w
```

## Issues

#### https://github.com/sysgears/mochapack/issues/131

(node:7768) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 unhandledRejection listeners added to [process]. Use emitter.setMaxListeners() to increase limit

```sh
# open terminal 1
git clone https://github.com/unlight/mochapack-node-playground
cd mochapack-node-playground
pnpm i
npm run test:w
# switch to terminal 2
sleep 0.2
touch src/index.ts
sleep 0.2
touch src/index.ts
sleep 0.2
touch src/index.ts
sleep 0.2
touch src/index.ts
sleep 0.2
touch src/index.ts
sleep 0.2
touch src/index.ts
sleep 0.2
touch src/index.ts
sleep 0.2
touch src/index.ts
sleep 0.2
touch src/index.ts
echo "check terminal 1"
```
