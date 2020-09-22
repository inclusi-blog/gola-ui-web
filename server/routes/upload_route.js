const multer = require('multer')();
const s3Middlewares = require('../middlewares/get_signed_url');
const UploadController = require('../controller/upload_controller');

class UploadRoutes {

  constructor(app) {
    this.app = app;
    this.controller = new UploadController();
    this.routes();
  }

  registerApis() {
    this.app.use('/api/v1/upload', multer.single('file'));
    this.app.route('/api/v1/upload').post(s3Middlewares.presignedPUTURL, this.controller.uploadToS3.bind(this.controller));
  }

  routes() {
    this.registerApis();
  }
}

module.exports = UploadRoutes;
