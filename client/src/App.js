import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withTranslation, Trans } from "react-i18next";
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
import logo from "../src/resources/img/logo-transparent.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  state = {
    currentPath: null,
    language: "fr",
  };

  getCurrentPath = (currentPathFromChild) => {
    this.setState({ currentPath: currentPathFromChild });
  };

  onLanguageHandle = (language) => {
    console.log(language);
    let newLang = language;
    this.setState({ language: newLang });
    this.props.i18n.changeLanguage(newLang);
  };

  scrollToNextSection = () => {
    this.ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  render() {
    return (
      <Suspense fallback="loading">
        <div>
          <MediaQuery maxDeviceWidth={768}>
            <Router>
              <div id="mobile-page">
                <Nav mobile="y" onLanguageHandle={this.onLanguageHandle} />
                <div id="eltaskyline">
                  <img src={elta} alt="Electronic&nbsp;Tales skyline" />
                </div>
                <div id="mobile-main">
                  <div className="section">
                    <Presentation
                      mobile="y"
                      language={this.state.language}
                      scrollToNextSection={this.scrollToNextSection}
                    />
                  </div>
                  <div className="section light-background">
                    <div ref={this.ref} className="ref-wrapper">
                      <Why mobile="y" language={this.state.language} />
                    </div>
                  </div>
                  <div className="section dark-background">
                    <Concept mobile="y" language={this.state.language} />
                  </div>
                  <div className="section light-background">
                    <Tracks mobile="y" language={this.state.language} />
                  </div>
                  <div className="section dark-background">
                    <Progress mobile="y" language={this.state.language} />
                  </div>
                  <div className="section light-background">
                    <Signup mobile="y" language={this.state.language} />
                  </div>
                  <div className="section dark-background">
                    <Team mobile="y" language={this.state.language} />
                  </div>
                </div>
                <Footer mobile="y" language={this.state.language} />
              </div>
            </Router>
          </MediaQuery>
          <MediaQuery minDeviceWidth={769}>
            <Router>
              <Nav
                currentPath={this.state.currentPath}
                onLanguageHandle={this.onLanguageHandle}
              />
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
                          language={this.state.language}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/why"
                      render={(props) => (
                        <Why
                          {...props}
                          passCurrentPath={this.getCurrentPath}
                          language={this.state.language}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/concept"
                      render={(props) => (
                        <Concept
                          {...props}
                          passCurrentPath={this.getCurrentPath}
                          language={this.state.language}
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
                          language={this.state.language}
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
                          language={this.state.language}
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
                          language={this.state.language}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/team"
                      render={(props) => (
                        <Team
                          {...props}
                          passCurrentPath={this.getCurrentPath}
                          language={this.state.language}
                        />
                      )}
                    />
                  </Switch>
                </div>
                <Footer />
              </div>
            </Router>
          </MediaQuery>
        </div>
      </Suspense>
    );
  }
}

export default withTranslation()(App);

{
  /* <div id="little-screens">
<img src={logo} alt="Electronic&nbsp;Tales logo" />
<p>
  Notre équipe de lutins du dev travaille actuellement
  d'arrache-clavier à la version mobile de ce site. <br />
  <br />
  Translate-toi jusqu'à un desktop ou reviens un peu plus tard.
</p>
</div> */
}
