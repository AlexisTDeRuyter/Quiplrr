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
    console.log(this.props.rank)
    return (
      <div className='competition-podium well'>
        <div className='podium-block bronze'>
          <div className='name'>Alexis </div>
          <div className='podium'><span>3rd</span></div>
        </div>
        <div className='podium-block gold'>
          <div className='name'>Ryan</div>
          <div className='podium'><span>1st</span></div>
        </div>
        <div className='podium-block silver'>
          <div className='name'>Emmet</div>
          <div className='podium'><span>2nd</span></div>
        </div>
      </div>
    )
  }
}
export default withRouter(Results)
