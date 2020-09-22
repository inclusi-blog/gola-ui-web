const express = require('express');
const AWS = require('aws-sdk');

AWS.config.update({region: 'ap-south-1'});

const s3 = new AWS.S3({
  accessKeyId:  process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "ap-south-1",
  signatureVersion: 'v4',
});

const presignedGETURL = (req, res, next) => {
  s3.getSignedUrl('getObject', {
    ACL: 'public-read',
    Bucket: process.env.S3_BUCKET_NAME,
    Key: 'image.jpg',
    Expires: 100,
  });
};

const presignedPUTURL = (req, res, next) => {
  if (req.file) {
    const key = `user/user1/${new Date().getTime()}-${req.file.originalname}`;
    s3.getSignedUrl('putObject', {
      Bucket: `${process.env.S3_BUCKET_NAME}`,
      Key: key,
      Expires: 100,
    }, (error, url) => {
      if (error) {
        console.error("Error Getting pre signed URL",error);
        return res.status(422).send({ message: 'Invalid Payload' });
      }
        res.locals.PRE_SIGNED_URL = url;
        res.locals.filePath = key;
        next();

    });
  } else {
    console.error("Error Processing Request", req);
    return res.status(422).send({ message: 'Invalid Payload' });
  }
};


module.exports = {
  presignedGETURL,
  presignedPUTURL
};
