import React, { Component } from 'react';

export default class ImageUploader extends Component {
  render() {
    return (
      <div>
        <form action="/api/images" method="POST" encType="multipart/form-data">
          <input type="file" name="uploadFile"/>
          <button type="submit">submit</button>
        </form>
        <div className="uploadedImage"><img src="" alt="the image"/></div>
      </div>
    )
  }
}
