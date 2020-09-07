/* eslint-disable import/no-extraneous-dependencies */

const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const SimplProgressWebpackPlugin = require('simple-progress-webpack-plugin');

const { APP_DIR, DIST_DIR } = require('./paths');
const { APP_ID } = require('../app.config');
const { dependencies } = require('../../package.json');

module.exports = {
  target: 'web',
  entry: {
    app: [path.resolve(APP_DIR, './src/index.js')],
  },
  output: {
    filename: '[name].bundle.js',
    path: DIST_DIR,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules\/(?!(react-hook-form|react-hook-form-input|uuidv4|swiper|dom7)\/).*/, /\.test\.jsx?$/],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        },
      },
      {
        test: /\.(css)$/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg|png|ttf|woff|woff2|eot)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(xlsx)$/,
        loader: 'file-loader?name=[name].[ext]'
      },
    ],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(APP_DIR, './src/index.html'),
      favicon: require.resolve(path.resolve(APP_DIR, './src/assets/favicon.ico')),
      templateParameters: {
        APP_ID: APP_ID,
      },
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyCSS: true,
        minifyJS: true,
      }
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(APP_DIR, './src/config.js'), to: DIST_DIR },
      ]
    }),
    new webpack.ProvidePlugin({
      Promise: 'es6-promise-promise',
    }),
    new SimplProgressWebpackPlugin(),
  ],
  externals: {
    appConfig: 'environmentConfiguration'
  }
};
