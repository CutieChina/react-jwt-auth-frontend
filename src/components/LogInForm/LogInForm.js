import React, { Component } from 'react'


import './LogInForm.css'

class LogInForm extends Component {
  render () {
    document.body.style.backgroundImage = ("url('https://images2.minutemediacdn.com/image/upload/c_crop,h_674,w_1200,x_0,y_113/f_auto,q_auto,w_1100/v1554999553/shape/mentalfloss/504605-publicdomain.gif')")

    return (
      <div>
        <h2 className='login'>Log In</h2>

        <form>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' onChange={this.props.handleInput} />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' onChange={this.props.handleInput} />
          </div>
          <input value='Submit' type='submit' onClick={this.props.handleLogIn} />
        </form>
      </div>
    )
  }
}

export default LogInForm
