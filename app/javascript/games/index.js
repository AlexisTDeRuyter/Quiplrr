import React, { Component } from 'react'
import {
  Router,
  Route,
  Link
} from 'react-router-dom'
import Register from '../register/index'
import Join from '../join/index'
import GroupGame from '../group_game/index'
import createHistory from 'history/createBrowserHistory'
import Results from '../results/index'

export default class GroupGameRoutes extends Component {
  constructor(props) {
    super(props)
    this.history = createHistory()
    this.state = {
      subscription: null,
      token: '',
      players: [],
      question: '',
      is_real: '',
      score: 0,
      questionsRemaining: 11,
      playerName: '',
      rank: [],
    }
  }
  _createGame = (token, playerName) => {
    this.setState({
      token,
      players: [playerName]
    })
  }

  _subscribeUser = (token, players) => {
    this.setState({
      token,
      players
    })
  }

  _createSubscription = (token, playerName) => {
    let cable = ActionCable.createConsumer('ws://www.quiplrr.herokuapp.com/websocket?username=' + playerName)
    let subscription = cable.subscriptions.create({
      channel: 'GroupGameChannel',
      room: token
    }, {
      received: (data) => {
        if (data['token']) {
          this.setState({
            token: data['token'],
            players: data['players']
          })
        } else if (data['start']) {
          this.history.push('/quiplrr/group/group_game')
        } else if (data['question']) {
          this.setState({
            question: data['question'],
            is_real: data['is_real'],
            questionsRemaining: (this.state.questionsRemaining - 1)
          })
          if (this.state.questionsRemaining === 0) {
            subscription.send({
              playerName: this.state.playerName,
              results: this.state.score
            })
            this.history.push('/quiplrr/group/results')
          }
        } else if (data['rank']) {
          this.setState({
            rank: data['rank']
          })
        }
      }
    })
    this.setState({ subscription, playerName })
  }

  _checkAnswer = (response) => {
    if (this.state.is_real === response) {
      this.setState({
        score: (this.state.score + 100)
      })
    }
  }

  render(){
    return (
      <Router history={this.history}>
        <div>
          <ul>
            <li><Link to="/quiplrr/group/register">Register</Link></li>
            <li><Link to="/quiplrr/group/join">Join</Link></li>
            <li><Link to="/quiplrr/group/group_game">Group Game</Link></li>
          </ul>

          <hr/>

          <Route exact path="/quiplrr/group/register"
            render={()=><Register
              _createSubscription={this._createSubscription.bind(this)}
              _createGame={this._createGame.bind(this)}
              _subscribeUser={this._subscribeUser.bind(this)}
              />}/>
          <Route exact path="/quiplrr/group/join"
            render={()=><Join
              token = {this.state.token}
              players = {this.state.players}
              subscription = {this.state.subscription}
              />}/>
          <Route exact path='/quiplrr/group/group_game'
            render={()=><GroupGame
              score={this.state.score}
              question={this.state.question}
              _checkAnswer={this._checkAnswer.bind(this)}
            />}/>
          <Route exact path='/quiplrr/group/results'
            render={()=><Results
              rank={this.state.rank}
              />}/>
        </div>
      </Router>
    )
  }
}
