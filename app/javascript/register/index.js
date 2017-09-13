import React, { Component } from 'react'
import RegisterForm from './_register_form'
import JoinForm from './_join_form'

export default class Register extends Component {

  updateHistory() {
    this.props.history.push('/quiplrr/group/join')
  }

  render() {
    return (
      <div>
        <div>
          <button type='button' className='button'>New Game</button>
          <RegisterForm updateHistory={this.updateHistory.bind(this)} />
        </div>
        <div>
          <button type='button' className='button'>Join Game</button>
          <JoinForm updateHistory={this.updateHistory.bind(this)} />
        </div>
      </div>
    )
  }
}
