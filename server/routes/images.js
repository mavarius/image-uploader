const express = require('express')
const router = express.Router()

const Image = require('../models/Image')
const multer = require('multer')
const upload = multer({storage: multer.memoryStorage()})

router.post('/', upload.single('uploadFile'), (req, res) => {
  console.log('req.file: ', req.file)

  Image.upload(req.file)
    .then(theImage => {
      res.send(theImage)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = router;
