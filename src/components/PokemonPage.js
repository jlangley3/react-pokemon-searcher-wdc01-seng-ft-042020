import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'


class PokemonPage extends React.Component {

  constructor(){
    super()
    this.state = {
      collection: [],
      search: "",
      backUrl: ""
      
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then(data => {   
      this.setState({
        collection: data
      })
    })
  }

  handleChange = (event) => {
    this.setState({
    [event.target.name]: event.target.value,
    })
   
  }


  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search handleChange={this.handleChange} handleSearch={this.handleSearch} search={this.state.search}/>
        <br />
        <PokemonCollection collection={this.state.collection.filter(pokemon => { return pokemon.name.includes(this.state.search) })} />
      </Container>
    )
  }
}

export default PokemonPage
