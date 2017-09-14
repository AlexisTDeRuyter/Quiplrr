import React, { Component } from 'react'
import RegisterForm from './_register_form'
import JoinForm from './_join_form'
import { withRouter } from 'react-router-dom'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayNewGameButton: true,
      displayJoinGameButton: true,
    }
  }

  _updateHistory = () => {
    this.props.history.push('/quiplrr/group/join')
  }

  _handleNewGameButtonClick = () => {
    this.setState({
      displayNewGameButton: false
    })
  }

  _handleJoinGameButtonClick = () => {
    this.setState({
      displayJoinGameButton: false
    })
  }

  _displayNewGame = () => {
    if (this.state.displayNewGameButton) {
      return (
        <button onClick={this._handleNewGameButtonClick} className='button'>New Game</button>
      )
    } else {
      return (
        <RegisterForm
          _updateHistory={this._updateHistory.bind(this)}
          _createSubscription={this.props._createSubscription}
          _createGame={this.props._createGame}
        />
      )
    }
  }

  _displayJoinGame = () => {
    if (this.state.displayJoinGameButton) {
      return (
        <button onClick={this._handleJoinGameButtonClick} className='button'>Join Game</button>
      )
    } else {
      return (
        <JoinForm
          _updateHistory={this._updateHistory.bind(this)}
          _createSubscription={this.props._createSubscription}
          _subscribeUser={this.props._subscribeUser}
        />
      )
    }
  }

  render() {
    return (
      <div>
        <div>
          {this._displayNewGame()}
        </div>
        <div>
          {this._displayJoinGame()}
        </div>
      </div>
    )
  }
}
export default withRouter(Register)
