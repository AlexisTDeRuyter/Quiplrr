import React, { Component } from 'react'
import Players from './_players'
import { withRouter } from 'react-router-dom'
 find 
class Join extends Component {
  constructor(props) {
    super(props)
  }

  renderPlayers() {
    return this.props.players.map((player) => {
      return (
        <Players username={player} key={player}/>
        )
    })
  }

  _handleButtonPress = (event) => {
    event.preventDefault()
    this.props.subscription.send({ start: true })
  }

  render() {
    return (
      <div>
        <h1>Enter Token to join: {this.props.token}</h1>
        <div>
          {this.renderPlayers()}
        </div>
        <form onSubmit={this._handleButtonPress}>
          <button type='submit' className='button'>Start</button>
        </form>
      </div>
    )
  }
}
export default withRouter(Join)
