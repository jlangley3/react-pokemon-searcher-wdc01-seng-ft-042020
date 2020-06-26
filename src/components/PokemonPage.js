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
      search: ""
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

  

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search search={this.state.search}/>
        <br />
        <PokemonCollection collection={this.state.collection} />
      </Container>
    )
  }
}

export default PokemonPage
