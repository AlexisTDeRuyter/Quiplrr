import React, { Component } from 'react'
ActionCable = require('actioncable')
var cable = ActionCable.createConsumer('ws://localhost:3000/websocket')
cable.subscriptions.create({ channel: 'GroupGameChannel', room: "Best Room" })

export default class RegisterForm extends Component {
  render() {
    return (
      <div>
        <form>
          <input type='text' placeholder='Player Name' />
          <button type='submit' className='button'>Create</button>
        </form>
      </div>
    )
  }
}
