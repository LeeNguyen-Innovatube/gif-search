import React from 'react'

const GifItem = ({ gif, onGifSelect }) =>
  <div className="gif-item">
    <img src={gif.images.downsized.url} alt='gif' onClick={() => onGifSelect(gif)}/>
  </div>

export default GifItem
