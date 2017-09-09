import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { GifsActions, ModalActions } from '../redux/actions'
import GifList from './gifs/list'
import GifModal from './gifs/modal'
import SearchBar from './gifs/SearchBar'
import '../styles/app.css'

const Home = ({ gifs, authenticated, modalIsOpen, selectedGif, GifsActions, ModalActions }) =>
  <div>
    <SearchBar onTermChange={GifsActions.requestGifs} />

    <GifList gifs={ gifs } onGifSelect={ ModalActions.openModal } isAuthenticated={ authenticated } />

    <GifModal modalIsOpen={ modalIsOpen } selectedGif={ selectedGif } onRequestClose={ ModalActions.closeModal } />
  </div>

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  gifs: state.gifs.data,
  modalIsOpen: state.modal.modalIsOpen,
  selectedGif: state.modal.selectedGif
})

const mapDispatchToProps = dispatch => ({
  GifsActions: bindActionCreators(GifsActions, dispatch),
  ModalActions: bindActionCreators(ModalActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
