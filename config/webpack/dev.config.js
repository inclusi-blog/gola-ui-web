/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { merge } = require('webpack-merge');

const commonConfig = require('./common.config');

const devConfig = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client'
    ]
  },
  resolve: {
    alias: { 'react-dom': '@hot-loader/react-dom' }
  },
  module: {
    rules: [
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
};

module.exports = merge(commonConfig, devConfig);
