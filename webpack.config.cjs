const nodeExternals = require('webpack-node-externals');

module.exports = (env, argv) => {
  const isWatchMode = Boolean(argv.watch);

  /**
   * @type { import('webpack').Configuration }
   */
  const config = {
    mode: 'development',
    target: 'node', // webpack should compile node compatible code
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    devtool: 'eval', // https://webpack.js.org/configuration/devtool/
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    output: {
      // use absolute paths in sourcemaps (important for debugging via IDE)
      devtoolModuleFilenameTemplate: '[absolute-resource-path]',
      devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]',
      iife: false,
    },
    optimization: {
      minimize: false,
      moduleIds: 'named',
      chunkIds: 'named',
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: {
            loader: 'swc-loader',
            options: {},
          },
        },
      ],
    },
  };

  return config;
};
