import React from "react"
import ReactDOM from "react-dom"
import SearchBar from "./components/SearchBar"
import GifList from "./components/GifList"
import GifModal from "./components/GifModal"
import axios from "axios"
import "./styles/app.css"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      gifs: [],
      selectedGif: null,
      modalIsOpen: false
    }
  }

  openModal = gif =>
    this.setState({
      modalIsOpen: true,
      selectedGif: gif
    })

  closeModal = () =>
    this.setState({
      modalIsOpen: false,
      selectedGif: null
    })

  handleTermChange = term => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`
    axios.get(url).then(res => {
      this.setState({ gifs: res.data.data })
    })
  }

  render = () => (
    <div>
      <SearchBar onTermChange={this.handleTermChange} />
      <GifList gifs={this.state.gifs} onGifSelect={this.openModal} />
      <GifModal
        modalIsOpen={this.state.modalIsOpen}
        selectedGif={this.state.selectedGif}
        onRequestClose={this.closeModal}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
