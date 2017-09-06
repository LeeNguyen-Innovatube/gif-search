import React from "react"

const SearchBar = ({ onTermChange }) => {
  const submitChange = e => onTermChange(e.target.value)
  return (
    <div className="search">
      <input onChange={submitChange} />
    </div>
  )
}

export default SearchBar
