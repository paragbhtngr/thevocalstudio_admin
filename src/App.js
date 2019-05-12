import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from './login/Login';
import PwReset from './login/PwReset';
import PwResetConfirm from './login/PwResetConfirm'
import Dashboard from './dashboard/Dashboard';

// Theme Stylesheets
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/pwreset" component={PwReset} />
        <Route path="/pwresetconfirm" component={PwResetConfirm} />
      </div>
    </Router>
    );
  }
}

export default App;
