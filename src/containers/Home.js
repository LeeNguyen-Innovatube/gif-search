import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import SearchBar from '../components/SearchBar'
import GifList from '../components/GifList'
import GifModal from '../components/GifModal'
import '../styles/app.css'

const Home = ({ gifs, modalIsOpen, selectedGif, actions }) => (
  <div>
    <SearchBar onTermChange={actions.requestGifs} />
    <GifList
      gifs={gifs}
      onGifSelect={selectedGif => actions.openModal(selectedGif)}
    />
    <GifModal
      modalIsOpen={modalIsOpen}
      selectedGif={selectedGif}
      onRequestClose={() => actions.closeModal()}
    />
  </div>
)

const mapStateToProps = state => ({
  gifs: state.gifs,
  modalIsOpen: state.modal.modalIsOpen,
  selectedGif: state.modal.selectedGif
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
