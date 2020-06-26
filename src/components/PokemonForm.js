import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={() => {console.log("submitting form...")}}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.props.handleChange} value={event.target.value}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.props.handleChange} value={event.target.value}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.props.handleChange} value={event.target.value}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.props.handleChange} value={event.target.value}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
