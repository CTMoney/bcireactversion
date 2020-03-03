import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'
import Products from './pages/Products'
import Services from './pages/Services'

export default class App extends Component {
  render() {
    return (
      <>
        <div id="routeWrapper">
          <Header />
          <Router>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={AboutUs} />
              <Route path="/contact" component={ContactUs} />
              <Route path="/products" component={Products} />
              <Route path="/services" component={Services} />
            </Switch>
          </Router>
        </div>
        <Footer />
      </>
    )
  }
}

