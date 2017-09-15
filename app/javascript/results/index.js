import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Results extends Component {

  render() {
    return (
      <div>
        <table class="table-minimal">
          <thead>
            <tr>
              <th>{this.props.rank[0][0]}</th>
              <th>{this.props.rank[0][1]}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.rank.length > 1 ? this.props.rank[1][0] : null}</td>
              <td>{this.props.rank.length > 1 ? this.props.rank[1][1] : null}</td>
            </tr>
            <tr>
              <td>{this.props.rank.length > 2 ? this.props.rank[2][0] : null}</td>
              <td>{this.props.rank.length > 2 ? this.props.rank[2][1] : null}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
export default withRouter(Results)
