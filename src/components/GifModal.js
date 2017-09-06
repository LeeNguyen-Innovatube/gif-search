import React from "react"
import Modal from "react-modal"

const GifModal = ({ modalIsOpen, selectedGif, onRequestClose }) => {
  if (!selectedGif) {
    return <div />
  }
  const closeModal = () => onRequestClose()

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
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

        <button onClick={closeModal}>close</button>
      </div>
    </Modal>
  )
}

export default GifModal
