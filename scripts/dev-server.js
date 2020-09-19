/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const { createProxyMiddleware } = require('http-proxy-middleware');
const DashboardPlugin = require('webpack-dashboard/plugin');
const config = require('../config/webpack/dev.config');


const app = express();
const compiler = webpack(config);

compiler.apply(new DashboardPlugin());

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));

const routerProxyConfig = {
  '/post/v1': 'http://localhost:8080',
  '/idp/v1': 'http://localhost:8081'
};

const options = {
  target: 'http://localhost:3000',
  changeOrigin: true,
  secure: false,
  router: routerProxyConfig,
};

app.use(createProxyMiddleware('/api', options));

app.use('*', (req, res) => {
  const filename = path.join(compiler.outputPath, './index.html');

  compiler.outputFileSystem.readFile(filename, (err, result) => {
    res.set('content-type', 'text/html');
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');

    if (err) {
      res.send(`<meta http-equiv="refresh" content="1">
        <div style="line-height: 100vh; text-align: center;">Hold your horses! Still bundling the files…</div>`);
    } else {
      res.send(result);
    }

    res.end();
  });
});

// Serve the files on port 3000.
app.listen(3000, () => {
  console.log('Server is listening on port 3000!\n');
});

