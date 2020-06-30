import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state= {
     side: true
  }

  togglePic = () => {
this.setState({
  side: !this.state.side
})
}


  render() {
    let {name, hp, sprites} = this.props.pokemon
    return (
      <Card onClick={this.togglePic}>
        <div>
          <div className="image">
            <img src={this.state.side ? sprites.front : sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
