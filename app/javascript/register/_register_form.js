import React, { Component } from 'react'
ActionCable = require('actioncable')

export default class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {username: ''}
  }

  _handleChange = (event) => {
    this.setState({username: event.target.value})
  }

  _handleButtonPress = (event) => {
    event.preventDefault()
    fetch('https://www.quiplrr.com/quiplrr/group/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        player_name: this.state.username
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.props._createSubscription(responseJson['token'], responseJson['player_name'])
      this.props._createGame(responseJson['token'], responseJson['player_name'])
      this.props._updateHistory()
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this._handleButtonPress}>
          <input type='text' placeholder='Player Name' value={this.state.username} onChange={this._handleChange} />
          <button type='submit' className='button'>Create</button>
        </form>
      </div>
    )
  }
}
