import React, { Component } from 'react'

export default class JoinForm extends Component {
  render() {
    return (
      <div>
        <form>
          <input type='text' placeholder='Game Token' />
          <input type='text' placeholder='Player Name' />
          <button type='submit' className='button'>Join!</button>
        </form>
      </div>
    )
  }
}
