import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
state = {
  name: "",
  hp: "",
  frontUrl: "",
  backUrl: ""
}

handleForm = (event) => {
  let name = event.target.name
  let value = event.target.value
  this.setState({[name]: value})
}

handlePost = (event) => {
  event.preventDefault();
  let {name, hp, frontUrl, backUrl} = this.state
  fetch("http://localhost:3000/pokemon", {
    method: "POST",
    headers: {"Content-Type": "application/json", "Accepts": "application/json"},
    body: JSON.stringify({
      name: name,
      hp: hp,
      sprites: {
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
      }})
  })
.then(resp => resp.json())
.then(data => {
  this.props.addPokemon(data);
  this.setState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  })
})
}


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handlePost}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleForm} value={this.state.name}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleForm} value={this.state.hp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleForm} value={this.state.frontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleForm} value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
