import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MediaQuery from "react-responsive";

import Nav from "./nav/Nav.js";
import Footer from "./footer/Footer.js";
import Presentation from "./main/presentation/Presentation.js";
import Why from "./main/why/Why.js";
import Concept from "./main/concept/Concept.js";
import Tracks from "./main/tracks/Tracks.js";
import Progress from "./main/progress/Progress";
import Signup from "./main/signup/Signup.js";
import Team from "./main/team/Team.js";

import "./App.css";

import elta from "../src/resources/img/eltaskyline.svg";
import logo from "../src/resources/img/logo-transparent-smol-group.png";

class App extends React.Component {
  state = {
    currentPath: null,
  };

  getCurrentPath = (currentPathFromChild) => {
    this.setState({ currentPath: currentPathFromChild });
  };

  render() {
    return (
      <Suspense fallback="loading">
        <div>
          {/* <MediaQuery maxDeviceWidth={768}>
        <div id="little-screens">
          <img src={logo} alt="Electronic&nbsp;Tales logo"/>
          <p>Notre équipe de lutins du dev
            travaille actuellement d'arrache-clavier à la version mobile de ce site. <br/><br/>
            Translate-toi jusqu'à un desktop ou reviens un peu plus tard.
          </p>
        </div>
      </MediaQuery> */}
          {/* <MediaQuery minDeviceWidth={769}> */}

          <Router>
            <Nav currentPath={this.state.currentPath} />
            <div id="page-container">
              <div id="eltaskyline">
                <img src={elta} alt="Electronic&nbsp;Tales skyline" />
              </div>
              <div id="main">
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={(props) => (
                      <Presentation
                        {...props}
                        passCurrentPath={this.getCurrentPath}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/why"
                    render={(props) => (
                      <Why {...props} passCurrentPath={this.getCurrentPath} />
                    )}
                  />
                  <Route
                    exact
                    path="/concept"
                    render={(props) => (
                      <Concept
                        {...props}
                        passCurrentPath={this.getCurrentPath}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/tracks"
                    render={(props) => (
                      <Tracks
                        {...props}
                        passCurrentPath={this.getCurrentPath}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/progress"
                    render={(props) => (
                      <Progress
                        {...props}
                        passCurrentPath={this.getCurrentPath}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/signup"
                    render={(props) => (
                      <Signup
                        {...props}
                        passCurrentPath={this.getCurrentPath}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/team"
                    render={(props) => (
                      <Team {...props} passCurrentPath={this.getCurrentPath} />
                    )}
                  />
                </Switch>
              </div>
              <Footer />
            </div>
          </Router>
          {/* </MediaQuery> */}
        </div>
      </Suspense>
    );
  }
}

export default App;
