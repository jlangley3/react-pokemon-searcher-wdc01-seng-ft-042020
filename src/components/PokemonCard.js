import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(){
    super()
    this.state = {
      side: true
    }
    
  }

  handleClick = () => {
      console.log("click")
      this.setState({ 
        side: !this.state.side
      })
    }

  render() {
  
    let {name, hp, sprites} = this.props.pokemon
  
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img src={this.state.side ? sprites.front : sprites.back }
            alt="pokemon front pic" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
