import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize'
import './NavBar.css'

class NavBar extends Component {

  render() {
    let navBarItems = []
    if (this.props.isLoggedIn) {
      navBarItems.push(<NavItem key={1} href='/home'>Home</NavItem>)
      navBarItems.push(<NavItem key={3} href='/bot'>Chat</NavItem>)
      navBarItems.push(<NavItem key={2} href='/logout'>Log Out</NavItem>)
      
      
      if (this.props.user != null) {
        navBarItems.push(<NavItem key={4} href='/profile'>{this.props.user.email}</NavItem>)
      }
      // if (this.props.user != null) {
      //   navBarItems.push(<NavItem key={6} href='/board'>{this.props.user.email}</NavItem>)
      // }

    } else {
      navBarItems.push(<NavItem key={5} href='/signup'>Sign Up</NavItem>)
      navBarItems.push(<NavItem key={6} href='/login'>Log In</NavItem>)
    }
    return (
      <Navbar brand='W&Delta;nna Pl&Delta;y ?' className='nav' right>
        {navBarItems}
      </Navbar>
    )
  }
}

export default NavBar
