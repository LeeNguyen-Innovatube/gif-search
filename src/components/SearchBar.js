import React from "react"

export default class SearchBar extends React.Component {
  constructor() {
    super()
    this.state = { term: "" }
  }

  handleChange = e => {
    const term = e.target.value
    this.setState({ term })
    this.props.onTermChange(term)
  }

  render = () => (
    <div className="search">
      <input onChange={this.handleChange} />
    </div>
  )
}
