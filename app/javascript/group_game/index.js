import React, { Component } from 'react'

export default class GroupGame extends Component {
  _handleClick = (event) => {
    this.props._checkAnswer(event.target.value)
  }
  displayAnswerButtons() {
    if (this.props.showAnswerButtons) {
      return (
        <button onClick={this._handleClick} value='true' className='button'>Trump</button>
        <button onClick={this._handleClick} value='false' className='button'>Trumplrr</button>
      )
    }
    return false
  }

  render() {
    return (
      <div>
        <div>
          <h1>{this.props.question}</h1>
        </div>
        <div>
          {this.displayAnswerButtons()}
        </div>
        <div>
          <h4>Current Score: {this.props.score}</h4>
        </div>
    </div>
    )
  }
}
