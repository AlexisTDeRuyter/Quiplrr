import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Register from '../register/index'
import Join from '../join/index'

export default class GroupGameRoutes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '',
      players: []
    }
  }
  _createGame = (token, playerName) => {
    this.setState({
      token,
      players: [playerName]
    })
    console.log(this.state)
  }

  _createSubscription = (token, playerName) => {
    let cable = ActionCable.createConsumer('ws://localhost:3000/websocket?username=' + playerName)
    cable.subscriptions.create({
      channel: 'GroupGameChannel',
      room: token
    }, {
      received: (data) => {
        let state = {
          token: data['token'],
          players: data['players']
        }
        this.setState({
          token: state.token,
          players: state.players
          })
        console.log('this objects state')
        console.log(this.state)
      }
    })
  }

  render(){
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/quiplrr/group/register">Register</Link></li>
            <li><Link to="/quiplrr/group/join">Join</Link></li>
            <li><Link to="/group_game">Group Game</Link></li>
          </ul>

          <hr/>

          <Route exact path="/quiplrr/group/register"
            render={()=><Register
              _createSubscription={this._createSubscription.bind(this)}
              _createGame={this._createGame.bind(this)}
              />}/>
          <Route exact path="/quiplrr/group/join" component={Join}/>
        </div>
      </Router>
    )
  }
}
