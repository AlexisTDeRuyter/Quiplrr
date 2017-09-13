import React, { Component } from 'react'
import RegisterForm from './_register_form'
import JoinForm from './_join_form'
import { withRouter } from 'react-router-dom'

class Register extends Component {

  _updateHistory = () => {
    this.props.history.push('/quiplrr/group/join')
  }

  render() {
    return (
      <div>
        <div>
          <button type='button' className='button'>New Game</button>
          <RegisterForm
            _updateHistory={this._updateHistory.bind(this)}
            _createSubscription={this.props._createSubscription}
            _createGame={this.props._createGame}
          />
        </div>
        <div>
          <button type='button' className='button'>Join Game</button>
          <JoinForm
            _updateHistory={this._updateHistory.bind(this)}
            _createSubscription={this.props._createSubscription}
          />
        </div>
      </div>
    )
  }
}
export default withRouter(Register)
