import React from "react"
const GifItem = ({ gif, onGifSelect }) => {
  const openModal = () => onGifSelect(gif)
  return (
    <div className="gif-item" onClick={openModal}>
      <img src={gif.images.downsized.url} alt="gif" />
    </div>
  )
}

export default GifItem
