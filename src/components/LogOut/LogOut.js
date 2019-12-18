import React, { Component } from 'react'

import './LogOut.css'

class LogOut extends Component {

  render() {
    document.body.style.backgroundImage = "url('https://thumbs.gfycat.com/OfficialDecentAoudad-poster.jpg')"

    return (
      <div>
        <h4 className='logout'>You Haven't Seen The Last of Me...</h4>

        <form>
          <input value='Log Out' type='submit' onClick={this.props.handleLogOut} />
        </form>
      </div>
    )
  }
}

export default LogOut
