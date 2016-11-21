const Bucket = 'unique-bucket-of-doom'
const AWS_URL_BASE = 'https://s3.amazonaws.com/'

const mongoose = require('mongoose')
const aws = require('aws-sdk')
const uuid = require('uuid')
const path = require('path')

const s3 = new aws.S3()

const imageSchema = new mongoose.Schema({
  url: { type: String },
  name: { type: String },
  Key: { type: String }
})

imageSchema.statics.upload = function(fileObj) {
  return new Promise((resolve, reject) => {
    let { buffer, originalname } = fileObj
    let Key = uuid() = path.extname(originalname)

    let params = {
      Bucket, Key,
      ACL: 'public-read',
      Body: buffer
    }

    s3.putObject(params, err => {
      if (err) return reject(err)

      let url = `${AWS_URL_BASE}/${Bucket}/${Key}`

      this.create({url, Key, name: originalname}, (err, theImage) => {
        if (err) return reject(err)
        resolve(theImage)
      })
    })
  })
}

const Image = mongoose.model('Image', imageSchema)
module.exports = Image
