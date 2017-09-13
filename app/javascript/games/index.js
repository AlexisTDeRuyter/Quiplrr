import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Register from '../register/index'
import Join from '../join/index'


const GroupGameRoutes = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/quiplrr/group/register">Register</Link></li>
        <li><Link to="/quiplrr/group/join">Join</Link></li>
        <li><Link to="/group_game">Group Game</Link></li>
      </ul>

      <hr/>

      <Route exact path="/quiplrr/group/register" component={Register} />
      <Route exact path="/quiplrr/group/join" component={Join} />
    </div>
  </Router>
)
export default GroupGameRoutes
