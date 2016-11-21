import React, { Component } from 'react'
import ImageUploader from './ImageUploader'

export default class Layout extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Image Uploader</h1>
          <ImageUploader />
      </div>
    )
  }
}
