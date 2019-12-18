import React, { Component } from 'react'
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom'
import axios from 'axios'

import NavBar from '../NavBar/NavBar'
import SignUpForm from '../SignUpForm/SignUpForm'
import LogInForm from '../LogInForm/LogInForm'
import LogOut from '../LogOut/LogOut'
import Profile from '../Profile/Profile'
import './App.css'
import Home from '../Home/Home'
import Bot from '../Bot/Bot'
import MainQuiz from '../Quiz/MainQuiz'
// import Board from '../Board/Board'


const databaseUrl = process.env.NODE_ENV === 'production' ? process.env.BACKEND_APP_URL : 'http://localhost:3000'

class App extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
      user: null
    }
  }

  componentDidMount() {
    if (localStorage.token) {
      if (localStorage.user) {
        this.setState({
          user: JSON.parse(localStorage.user)
        })
      }
      this.setState({
        isLoggedIn: true
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
    // if (localStorage.token) {
    //   axios(
    //     {
    //       method: 'post',
    //       url: `${databaseUrl}/api/users`,
    //       headers: { Authorization: `Bearer ${localStorage.token}` }
    //     })
    //     .then(response => {
    //       this.setState({
    //         isLoggedIn: true,
    //         user: response.data.user
    //       })
    //       this.props.history.push('/profile')
    //     })
    //     .catch(err => console.log(err))
    // } else {
    //   this.setState({
    //     isLoggedIn: false
    //   })
    // }
  }

  handleLogOut = (e) => {
    e.preventDefault()
    window.localStorage.clear()
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    })
    this.props.history.push('/login')
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignUp = (e) => {
    e.preventDefault()
    let newUser = {
      email: this.state.email,
      password: this.state.password
    }
    axios(
      {
        method: 'post',
        url: `${databaseUrl}/api/users/signup`,
        data: newUser
      })
      .then(response => {
        console.log(response)
        const location = {
          pathname: '/login',
          state: { fromDashboard: true }
        }
        this.props.history.replace(location)
      })
      .catch(err => console.log(err))
  }

  handleLogIn = (e) => {
    e.preventDefault()
    let loginUser = {
      email: this.state.email,
      password: this.state.password
    }
    axios(
      {
        method: 'post',
        url: `${databaseUrl}/api/users/login`,
        data: loginUser
      })
      .then(response => {
        console.log(response)
        window.localStorage.setItem('token', response.data.token)
        window.localStorage.setItem('user', JSON.stringify(response.data.user))
        this.setState({
          isLoggedIn: true,
          user: response.data.user,
          email: '',
          password: ''
        })
        const location = {
          pathname: '/profile',
          state: { fromDashboard: true }
        }
        this.props.history.replace(location)
      })
      .catch(err => console.log(err))
  }

  // handleLogIn = (e) => {
  //   e.preventDefault()
  //   let loginUser = {
  //     email: this.state.email,
  //     password: this.state.password
  //   }
  //   axios(
  //     {
  //       method: 'post',
  //       url: `${databaseUrl}/api/users/login`,
  //       data: loginUser
  //     })
  //     .then(response => {
  //       console.log(response)
  //       window.localStorage.setItem('token', response.data.token)
  //       this.setState({
  //         isLoggedIn: true,
  //         user: response.data.user,
  //         email: '',
  //         password: ''
  //       })
  //       const location = {
  //         pathname: '/board',
  //         state: { fromDashboard: true }
  //       }
  //       this.props.history.replace(location)
  //     })
  //     .catch(err => console.log(err))
  // }

  updateUser = (update) => {
    console.log('UPDATE USER', update);
  }
  

  render() {
    return (
      <div>
        <NavBar isLoggedIn={this.state.isLoggedIn} user={this.state.user} />
        <div className='body'>
          <Switch>
            <Route path='/home'
              render={(props) => {
                return (
                  <Home />
                )
              }}
            />
            <Route path='/signup'
              render={(props) => {
                return (
                  <SignUpForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp} />
                )
              }}
            />
            <Route path='/logout'
              render={(props) => {
                return (
                  <LogOut isLoggedIn={this.state.isLoggedIn} handleLogOut={e => this.handleLogOut(e)} />
                )
              }}
            />
            <Route path='/login'
              render={(props) => {
                return (
                  <LogInForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn} />
                )
              }}
            />
            <Route path='/bot'
              render={(props) => {
                return (
                  <Bot isLoggedIn={this.state.isLoggedIn} user={this.state.user} />
                )
              }}
            />
            <Route path='/mainquiz'
              render={(props) => {
                return (
                  <MainQuiz isLoggedIn={this.state.isLoggedIn} user={this.state.user} />
                )
              }}
            />
            <Route path='/profile'
              render={(props) => {
                return (
                  <Profile isLoggedIn={this.state.isLoggedIn} user={this.state.user} updateUser={() => this.updateUser()}/>
                )
              }}
            />
            {/* <Route path='/board'
              render={(props) => {
                return (
                  <Board isLoggedIn={this.state.isLoggedIn} user={this.state.user} />
                )
              }}
            /> */}
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(App)
