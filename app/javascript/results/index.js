import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Results extends Component {
  _renderOutputs = () => {
    let ranking = 0
    return this.props.rank.map((person) => {
      ranking++
      return (
        <tr>
          <td>{ranking}</td>
          <td>{person[0]}</td>
          <td>{person[1]}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <table className="table-minimal">
          <tbody>
            {this._renderOutputs()}
          </tbody>
        </table>
      </div>
    )
  }
}
export default withRouter(Results)
