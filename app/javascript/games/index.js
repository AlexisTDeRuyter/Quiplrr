import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Register from '../register/index'


const GroupGameRoutes = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/quiplrr/group/register">Register</Link></li>
        <li><Link to="/join">Join</Link></li>
        <li><Link to="/group_game">Group Game</Link></li>
      </ul>

      <hr/>

      <Route exact path="/quiplrr/group/register" component={Register}/>
    </div>
  </Router>
)
export default GroupGameRoutes
