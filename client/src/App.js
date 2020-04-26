import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './nav/Nav.js';
import Footer from './footer/Footer.js';
import Presentation from './main/presentation/Presentation.js';
import Why from './main/why/Why.js';
import Concept from './main/concept/Concept.js';
import Tracks from './main/tracks/Tracks.js';
import Signup from './main/signup/Signup.js';

import './App.css';
import elta from '../src/resources/img/eltaskyline.svg';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { currentPath: null };
    this.getCurrentPath = this.getCurrentPath.bind(this);
  }

  getCurrentPath = (currentPathFromChild) => {
    this.setState({ currentPath: currentPathFromChild });
  }

  render() {
    return (
      <Router>
        <Nav currentPath={this.state.currentPath} />
        <div id="page-container">
          <div id="eltaskyline">
            <img src={elta} />
          </div>
          <div id="main">
            <Switch>
              {/* Why use this? Check at https://tylermcginnis.com/react-router-pass-props-to-components/ */}
              <Route
                exact path='/'
                render={(props) => <Presentation {...props} passCurrentPath={this.getCurrentPath} />} />
              <Route
                exact path='/why'
                render={(props) => <Why {...props} passCurrentPath={this.getCurrentPath} />} />
              <Route
                exact path='/concept'
                render={(props) => <Concept {...props} passCurrentPath={this.getCurrentPath} />} />
              <Route
                exact path='/tracks'
                render={(props) => <Tracks {...props} passCurrentPath={this.getCurrentPath} />} />
              <Route
                exact path='/signup'
                render={(props) => <Signup {...props} passCurrentPath={this.getCurrentPath} />} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;