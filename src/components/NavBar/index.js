import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class Index extends Component {

  state = {
    search: ''
  }

  handleInput = event => {
    let { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div id="navBarContainer">
        <Link id="navBarLink" to="/">Home</Link>
        <Link id="navBarLink" to="/services">Services</Link>
        <Link id="navBarLink" to="/products">Products</Link>
        <Link id="navBarLink" to="/contact">Contact Us</Link>
        <Link id="navBarLink" to="/about">About Us</Link>
        <form>
          <input
            type='search'
            name='search'
            value={this.state.search}
            onChange={this.handleInput}
            placeholder='Search'
          />
        </form>
      </div>
    )
  }
}