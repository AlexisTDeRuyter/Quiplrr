import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Results extends Component {

  render() {
    return (
      <div className='competition-podium well'>
        <div className='podium-block bronze'>
          <div className='name'>bronzey</div>
          <div className='podium'><span>0</span></div>
        </div>
        <div className='podium-block gold'>
          <div className='name'>goldie</div>
          <div className='podium'><span>good</span></div>
        </div>
        <div className='podium-block silver'>
          <div className='name'>silvus</div>
          <div className='podium'><span>666</span></div>
        </div>
      </div>
    )
  }
}
export default withRouter(Results)
