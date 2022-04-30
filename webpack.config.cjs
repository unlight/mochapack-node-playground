const { envBool } = require('env-bool');
const nodeExternals = require('webpack-node-externals');

const hasWatchFlag = process.argv.includes('--watch');

/**
 * env
 * @param  {string} env value in --webpack-env
 * @see https://github.com/sysgears/mochapack/blob/master/docs/installation/cli-usage.md
 */
module.exports = env => {
  const disableTsCheck = envBool(process.env.WORKSPACE_NO_TS_CHECK);
  /**
   * @type { import('webpack').Configuration }
   */
  const config = {
    mode: 'development',
    target: 'node', // webpack should compile node compatible code
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    devtool: 'inline-cheap-module-source-map',
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
        { parser: { amd: false } },
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
