import React from 'react'
import GifItem from './item'

const GifList = ({ gifs, onGifSelect }) =>
  <div className="gif-list">
    {gifs.map(gif => (
      <GifItem key={gif.id} gif={gif} onGifSelect={onGifSelect} />
    ))}
  </div>

export default GifList
