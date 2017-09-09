import React from 'react'

const GifItem = ({ gif }) =>
  <div className="gif-item">
    <img src={gif.images.downsized.url} alt='gif' />
  </div>

export default GifItem
