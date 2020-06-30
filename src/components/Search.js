import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" type="text" name="search" onChange={props.handleSearch} value={props.search}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
