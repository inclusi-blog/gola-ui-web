const path = require("path");

const APP_DIR = path.resolve(__dirname, '../../');
const DIST_DIR = path.resolve(APP_DIR, './dist');

module.exports = {
  APP_DIR,
  DIST_DIR
};
