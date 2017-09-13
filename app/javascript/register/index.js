import React, { Component } from 'react'
import RegisterForm from './_register_form'
import JoinForm from './_join_form'

export default class Register extends Component {
  render() {
    return (
      <div>
        <div>
          <button type='button' className='button'>New Game</button>
          <RegisterForm />
        </div>
        <div>
          <button type='button' className='button'>Join Game</button>
          <JoinForm />
        </div>
      </div>
    )
  }
}
