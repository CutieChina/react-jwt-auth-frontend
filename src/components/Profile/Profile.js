import React, { Component } from 'react'
import './Profile.css'

class Profile extends Component {
  state = {
    email: null,
  }

  setUserInfo() {
    let user = this.props.user
    this.setState({ user })
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  updateUser = (e) => {
    e.preventDefault();
    let update = {
      email: this.state.email
    }
    this.props.updateUser(update)
  }

  render() {
    document.body.style.backgroundImage = "url('https://thumbs.gfycat.com/CaninePassionateDiscus-max-1mb.gif')"
    if (this.props.user != null) {
      return (
        <div className='information'>
          <h5>Email:   {this.props.user.email}</h5>
          <h5>Password:   {this.props.user.password}</h5>
          <h5>Username:   {this.props.user.username}</h5>
          <h5>First Name:   {this.props.user.firstName}</h5>
          <h5>Last Name:   {this.props.user.lastName}</h5>
          <h5>Account Update At:   {this.props.user.updatedAt}</h5>
          <h5>Account Created At:   {this.props.user.createdAt}</h5>

          <br></br>

          <form onSubmit={this.updateUser}>
            <h5>Submit this form to update your profile</h5>
            <div>
              {/* <label htmlFor='email'>New Email</label> */}
              <input type='email' name='email' onChange={this.handleInput} placeholder='New Email' required/>
            </div>
            <button type="submit">Update Profile</button>
          </form>
        </div>
      )
    } else {
      return (
        <div>
        </div>
      )
    }
  }

}

export default Profile
