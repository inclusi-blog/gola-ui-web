const axios = require('axios');

class UploadController {
  uploadToS3(req, res) {
    axios({
      url: res.locals.PRE_SIGNED_URL,
      method: 'put',
      headers: {
        'Content-Type': req.file.mimetype
      },
      data: req.file.buffer
    })
      .then((response) => {
        return res.status(200).send({
          filePath: `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${res.locals.filePath}`
        });
      })
      .catch((error) => {
        console.info("Error Uploading File", error);
        return res.status(500).send({
          message: 'Invalid Data'
        });
      });
  }
}

module.exports = UploadController;
