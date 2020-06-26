import React from 'react'

const Search = props => {
  

let handleChange = (event) => {
  console.log(event.target.value)

}


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleChange} value={props.search} className="prompt"/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
