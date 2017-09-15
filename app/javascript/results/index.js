import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Results extends Component {

  render() {
    return (
      <div className='competition-podium well'>
        <div className='podium-block bronze'>
          <div className='name'>{this.props.rank.length > 2 ? this.props.rank[2][0] : null}</div>
          <div className='podium'><span>{this.props.rank.length > 2 ? this.props.rank[2][1] : null}</span></div>
        </div>
        <div className='podium-block gold'>
          <div className='name'>{this.props.rank[0][0]}</div>
          <div className='podium'><span>{this.props.rank[0][1]}</span></div>
        </div>
        <div className='podium-block silver'>
          <div className='name'>{this.props.rank.length > 1 ? this.props.rank[1][0] : null}</div>
          <div className='podium'><span>{this.props.rank.length > 1 ? this.props.rank[1][1] : null}</span></div>
        </div>
      </div>
    )
  }
}
export default withRouter(Results)
