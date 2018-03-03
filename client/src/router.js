import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from './pages/home';
import AboutPage from './pages/about';

class Router extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/about" component={} />
          <Route path="/home" component={HomePage} />
        </div>
      </Router>
    );
  }
}
export default Router;