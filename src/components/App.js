import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './../styles/App.css';
import Header from './../components/Header.js';
import Footer from './../components/Footer.js';
import Projects from './../components/Projects.js';
import Resume from './../components/Resume.js';
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
            <Route path="/resume" component={Resume}/>
            <Route component={NotFound}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

const NotFound = () => (
  <h1>404.. This page is not found!</h1>)

export default App;
