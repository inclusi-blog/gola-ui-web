/* eslint-disable import/no-extraneous-dependencies */

const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const chalk = require('chalk');

const { DIST_DIR } = require('./paths');
const commonConfig = require('./common.config');

const SHOULD_GENERATE_REPORT = process.env.PERF_ANALYSIS || false;
const SHOULD_ANALYSIS_BUNDLE = process.env.BUNDLE_ANALYSIS || false;

const prodConfig = {
  mode: 'production',
  devtool: SHOULD_GENERATE_REPORT ? 'source-map' : false,
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
      minChunks: 5,
      minSize: 100000,
      maxSize: 300000,
      cacheGroups: {
        default: {
          minChunks: 5,
          priority: -20,
          reuseExistingChunk: true,
          maxSize: 300000,
        },
      },
    },
    minimizer: [new TerserPlugin({
      parallel: true,
      sourceMap: !!SHOULD_GENERATE_REPORT,
      extractComments: false,
      terserOptions: {
        ecma: 5,
        mangle: true,
        ie8: false,
        safari10: false
      }
    })],
  },
};


if (SHOULD_GENERATE_REPORT) {
  prodConfig.plugins.push(new BundleStatsWebpackPlugin({
    outDir: '../reports',
    json: true,
    html: true,
  }));
  // eslint-disable-next-line no-console
  console.log(
    chalk.bgRed.bold('🚨 Generating Bundle Stats \n\n')
  );
}

if (SHOULD_ANALYSIS_BUNDLE) {
  prodConfig.plugins.push(new BundleAnalyzerPlugin());
  // eslint-disable-next-line no-console
  console.log(
    chalk.bgRed.bold('🚨 Running Bundle Analyzer \n\n')
  );
}

module.exports = merge(commonConfig, prodConfig);
