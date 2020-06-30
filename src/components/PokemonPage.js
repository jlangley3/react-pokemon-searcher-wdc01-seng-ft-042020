import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'


class PokemonPage extends React.Component {

  constructor() {
    super();
    this.state = {
      pokemonArray: [],
      search: ""
        }
  }

  fetch = () => {
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then(data => this.setState({pokemonArray: data}))
  }

  componentDidMount() {
     this.fetch()
  }

  handleSearch = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addPokemon = (pokemon) => {
    
    this.setState({
      pokemonArray: [pokemon, ...this.state.pokemonArray]
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm  addPokemon={this.addPokemon}/>
        <br />
        <Search search={this.state.search} handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection pokemon={this.state.pokemonArray.filter(pokemon => pokemon.name.includes(this.state.search))}/>
      </Container>
    )
  }
}

export default PokemonPage
