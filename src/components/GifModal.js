import React from "react"
import Modal from "react-modal"

const GifModal = ({ modalIsOpen, selectedGif, onRequestClose }) => {
  if (!selectedGif) {
    return <div />
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => onRequestClose()}
      contentLabel="selected"
    >
      <div>
        <img src={selectedGif.images.original.url} alt="gif original" />
        <p>
          <strong>Source:</strong>{" "}
          <a href={selectedGif.source}>{selectedGif.source}</a>
        </p>
        <p>
          <strong>Rating:</strong> {selectedGif.rating}
        </p>

        <button onClick={() => onRequestClose()}>close</button>
      </div>
    </Modal>
  )
}

export default GifModal
