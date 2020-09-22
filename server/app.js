const express = require('express');
const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");
const path = require("path");
const UploadRoutes = require('./routes/upload_route');


class App {
  express = express.Application;

  distDir = './public';

  constructor() {
    let env = dotenv.config();
    dotenvExpand(env);
    env = dotenv.config({path: path.join(__dirname, '.env')});
    dotenvExpand(env);
    this.express = express();
    this.init();
  }

  init() {
    this.initRoutes();
  }

  registerRoutes() {
    // eslint-disable-next-line no-new
    new UploadRoutes(this.express);
  }

  initRoutes() {
    this.registerRoutes();
  }
}

module.exports = new App().express.listen(3001);
