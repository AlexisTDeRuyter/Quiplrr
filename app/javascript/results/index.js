import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Results extends Component {

  render() {
    return (
      <div class="leaderboard">
        <h1>
          Highest Scores
        </h1>
        <ol>
          <li>
            <mark>{this.props.rank.length > 2 ? this.props.rank[2][0] : null}</mark>
            <small>{this.props.rank.length > 2 ? this.props.rank[2][1] : null}</small>
          </li>
          <li>
            <mark>{this.props.rank[0][0]}</mark>
            <small>{this.props.rank[0][1]}</small>
          </li>
          <li>
            <mark>{this.props.rank.length > 1 ? this.props.rank[1][0] : null}</mark>
            <small>{this.props.rank.length > 1 ? this.props.rank[1][1] : null}</small>
          </li>
          <li>
            <mark>Trevor McCormick</mark>
            <small>245</small>
          </li>
          <li>
            <mark>Andrew Fox</mark>
            <small>203</small>
          </li>
        </ol>
      </div>
    )
  }
}
export default withRouter(Results)
