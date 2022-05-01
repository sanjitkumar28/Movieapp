import React, { Component } from 'react'
import '../App.css'
export default class Navbar extends Component {
  render() {
    return (
      <div style={{display:'flex'}} className='heading'>
          <h1>MoviesApp</h1>
          <h3>Favourites</h3>
      </div>
    )
  }
}
