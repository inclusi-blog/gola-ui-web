// Experimental proxy to handle oauth redirect in local box (New Login Flow)
// Keeping it separate from dev-server is easier to debug

/*
1. Update OAUTH_URL in OAUTH_CONFIG to http://localhost:3000
2. Update proxy config in dev-server like below

const proxyOptions = {
  target: 'https://app.gola.xyz',
  changeOrigin: true,
  secure: false,
  router: {
    '/idp/v1': 'http://localhost:9000',
  },
};

const authProxy = {
  target: 'http://localhost:9000',
  changeOrigin: true,
  secure: false
};

app.use(createProxyMiddleware('/api', proxyOptions));
app.use(createProxyMiddleware('/platform', proxyOptions2));

3. yarn start && yarn mysterio
 */

const express = require('express');
const chalk = require('chalk');
const { createProxyMiddleware } = require('http-proxy-middleware');
const modifyResponse = require('node-http-proxy-json');

const app = express();
const TARGET_ENV_REGEX = new RegExp(`http://localhost:4444`,'g');

// eslint-disable-next-line no-unused-vars
function handleRedirect(proxyRes, req, res) {
  // eslint-disable-next-line no-console
  let tempLocation = proxyRes.headers.location;
  tempLocation = tempLocation.replace(TARGET_ENV_REGEX, "http://localhost:3000");
  // eslint-disable-next-line no-param-reassign,no-console
  proxyRes.headers.location = tempLocation;
}

function modifyResponseBody(proxyRes, req, res) {
  // eslint-disable-next-line func-names
  modifyResponse(res, proxyRes, function (body) {
    // eslint-disable-next-line no-console
    if (body) {
      let temp = JSON.stringify(body);
      temp = temp.replace(TARGET_ENV_REGEX, "http://localhost:3000");
      // eslint-disable-next-line no-param-reassign
      body = JSON.parse(temp);
      // console.log(temp); log response body
    }
    return body;
  });
}

// eslint-disable-next-line func-names
const onResponse = function (proxyRes, req, res) {
  // eslint-disable-next-line no-console
  console.log('[',res.statusCode,']',' ',req.originalUrl);

  if(['/api/idp/v1/token/validate', '/api/idp/v1/customer-profile'].includes(req.originalUrl)) {

  } else if (res.statusCode === 302 || proxyRes.statusCode === 302) {
    handleRedirect(proxyRes, req, res);
  } else {
    modifyResponseBody(proxyRes, req, res);
  }
};

const routerProxyConfig = {
  '/oauth2': 'http://localhost:4444',
  '/idp/v1': 'http://localhost:8081',
};

const proxyOptions = {
  target: `http://localhost:9000/`,
  changeOrigin: true,
  secure: false,
  ws: true,
  router: routerProxyConfig,
  onProxyRes: onResponse,
};

app.use(createProxyMiddleware(proxyOptions));


// eslint-disable-next-line func-names
module.exports = function (PORT, HOST) {
  // eslint-disable-next-line no-param-reassign
  PORT = PORT || 9000;
  // eslint-disable-next-line func-names
  const authProxyServer = app.listen(PORT, HOST, function (err) {
    const formattedName = chalk.bold('Auth proxy');

    if (err) {
      throw err;
    }

    const addr = authProxyServer.address();

    // eslint-disable-next-line no-console
    console.log(
      chalk.yellowBright(
        `🚧  Running %s at ${chalk.cyan.bold('http://%s:%d/')}`
      ),
      formattedName, addr.address, addr.port
    );
  });

  authProxyServer.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
      // eslint-disable-next-line no-console
      console.log(
        chalk.red('❌  A server is already running at %s'),
        chalk.bold(PORT),
      );
      // eslint-disable-next-line no-console
      console.log();
      process.exit(1);
    }
  });

  return authProxyServer;
};

