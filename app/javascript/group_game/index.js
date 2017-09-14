import React, { Component } from 'react'

export default class GroupGame extends Component {
  _handleClick = (event) => {
    this.props._checkAnswer(event.target.value)
  }

  render() {
    return (
      <div>
        <div>
          <h1>{this.props.question}</h1>
        </div>
        <div>
          {this.props.showAnswerButtons ? <button onClick={this._handleClick} value='false' className='button'>Fake</button> : null}
          {this.props.showAnswerButtons ? <button onClick={this._handleClick} value='true' className='button'>Real</button> : null}
        </div>
        <div>
          <h4>Current Score: {this.props.score}</h4>
        </div>
    </div>
    )
  }
}
