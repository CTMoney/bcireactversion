import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class Index extends Component {
  render() {
    return (
      <div id="navBarContainer">
        <Link id="navBarLink" to="/">Home</Link>
        <Link id="navBarLink" to="/services">Services</Link>
        <Link id="navBarLink" to="/products">Products</Link>
        <Link id="navBarLink" to="/contact">Contact Us</Link>
        <Link id="navBarLink" to="/about">About Us</Link>
      </div>
    )
  }
}