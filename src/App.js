import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Header from './Header.js';
import Projects from './Projects.js';
import Home from './Home.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/projects" component={Projects}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

const NotFound = () => (
  <h1>404.. This page is not found!</h1>)

export default App;
