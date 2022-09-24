import React, { Component } from 'react'

export default class Navigation extends Component {
  render() {
    return (
      <div className='navbar something'>
        <nav>
            <ul  className='nav-cont'> 
                <li><a className='active' href='#home'>Home</a></li>
                <li><a href='#review'>Review</a></li>
                <li><a href='#booking'>Booking</a></li>
                <li><a className='contact' href='#Contact'>Contact</a></li>
            </ul>
        </nav>
      </div>
    )
  }
}
