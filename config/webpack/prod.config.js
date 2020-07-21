/* eslint-disable import/no-extraneous-dependencies */

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');

const { DIST_DIR } = require('./paths');

const commonConfig = require('./common.config');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[chunkhash].min.js',
    path: DIST_DIR,
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    minimizer: [new TerserPlugin({
      parallel: true,
      sourceMap: false,
      terserOptions: {
        ecma: 5,
        mangle: true,
        ie8: false,
        safari10: false
      }
    })],
  },
};

module.exports = merge(commonConfig, prodConfig);
