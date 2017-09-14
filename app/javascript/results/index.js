import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Results extends Component {
  _listRankings = () => {
    return this.props.rank.map((player) => {
      return (
        <tr>
          <td>{player[0]}</td>
          <td>{player[1]}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>Results</h1>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Player</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {this._listRankings()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default withRouter(Results)
