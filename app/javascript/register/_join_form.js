import React, { Component } from 'react'

export default class JoinForm extends Component {
  constructor(props) {
    super(props)
    this.state = {token: '', username: ''}
  }

  _handleTokenChange = (event) => {
    this.setState({token: event.target.value})
  }

  _handleUsernameChange = (event) => {
    this.setState({username: event.target.value})
  }

  _handleButtonPress = (event) => {
    event.preventDefault()
    fetch('https://quiplrr.herokuapp.com/quiplrr/players/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        player_name: this.state.username,
        token: this.state.token
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.props._createSubscription(responseJson['token'], responseJson['player_name'])
      this.props._subscribeUser(responseJson['token'], responseJson['players'])
      this.props._updateHistory()
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this._handleButtonPress}>
          <input type='text' placeholder='Game Token' value={this.state.token} onChange={this._handleTokenChange} />
          <input type='text' placeholder='Player Name' value={this.state.username} onChange={this._handleUsernameChange} />
          <button type='submit' className='button'>Join!</button>
        </form>
      </div>
    )
  }
}
