import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class Index extends Component {
  render() {
    return (
      <>
        <div>
          <ul id="navBarContainer">
            <li><Link id="navBarLink" to="/">Home</Link></li>
            <li><Link id="navBarLink" to="/services">Services</Link></li>
            <li><Link id="navBarLink" to="/products">Products</Link></li>
            <li><Link id="navBarLink" to="/contact">Contact Us</Link></li>
            <li><Link id="navBarLink" to="/about">About Us</Link></li>
          </ul>
        </div>
      </>
    )
  }
}