/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const { createProxyMiddleware } = require('http-proxy-middleware');
const DashboardPlugin = require('webpack-dashboard/plugin');
const chalk = require('chalk');
const mysterio = require('./mysterio');
const config = require('../config/webpack/dev.config');
const pkgConfig = require('../package.json');

const app = express();
const compiler = webpack(config);
const appName = pkgConfig.name;

compiler.apply(new DashboardPlugin());

const DEV_PORT = process.env.DEV_PORT ?? '3000';
const DEV_HOST = process.env.DEV_HOST ?? 'localhost';

const routerProxyConfig = {
  '/post/v1': 'http://localhost:8080',
  '/idp/v1': 'http://localhost:9000',
  'api/v1': 'http://localhost:3001',
  '/tracing/span': 'http://localhost:9411'
};

const options = {
  target: 'http://localhost:3000',
  changeOrigin: true,
  cookieDomainRewrite: "",
  secure: false,
  router: routerProxyConfig,
};

const authProxy = {
  target: 'http://localhost:9000',
  cookieDomainRewrite: "",
  changeOrigin: true,
  secure: false,
};

app.use(createProxyMiddleware('/api', options));
app.use(createProxyMiddleware('/oauth2', authProxy));

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler, {
  // eslint-disable-next-line no-console
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));

// eslint-disable-next-line consistent-return
app.use('*', (req, res, next) => {
  if (req.method !== 'GET') {
    return next();
  }

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
//
// mysterio(9000);
//
// // Serve the files on port 3000.
// app.listen(3000, () => {
//   console.log('Server is listening on port 3000!\n');
// });

const authProxyServer = mysterio(9000, DEV_HOST);

const devServer = app.listen(DEV_PORT, DEV_HOST, function (err) {
  if (err) {
    throw err;
  }

  const addr = devServer.address();
  // eslint-disable-next-line no-console
  console.log(
    chalk.yellowBright(
      `🚧  Running %s at ${chalk.cyan.bold('http://%s:%d/')}`
    ),
    chalk.bold(appName), addr.address, addr.port
  );
  // eslint-disable-next-line no-console
  console.log();
});

devServer.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    // eslint-disable-next-line no-console
    console.log();
    // eslint-disable-next-line no-console
    console.log(
      chalk.red('❌  A server is already running at %s'),
      chalk.bold(DEV_PORT),
    );
    // eslint-disable-next-line no-console
    console.log();
    process.exit(1);
  }
});

function shutDown() {
  devServer.close();
  authProxyServer.close();
  // eslint-disable-next-line no-console
  console.log();
  // eslint-disable-next-line no-console
  console.log(chalk.redBright(
    `${chalk.bold(appName)} server stopped!`
  ));

  process.exit();
}

process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);
