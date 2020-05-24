import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withTranslation } from "react-i18next";
import i18next from "i18next";
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.whyRef = React.createRef();
    this.signupRef = React.createRef();
  }

  state = {
    currentPath: null,
    language: "",
  };

  componentDidMount() {
    if (i18next.language.includes("en") || i18next.language.includes("fr")) {
      this.setState({ language: i18next.language });
    } else {
      this.setState({ language: "en" });
    }
  }

  getCurrentPath = (currentPathFromChild) => {
    this.setState({ currentPath: currentPathFromChild });
  };

  onLanguageHandle = (newLang) => {
    i18next.changeLanguage(newLang, this.setState({ language: newLang }));
  };

  scrollToASpecificDiv = (divReference) => {
    switch (divReference) {
      case "whyRef":
        this.whyRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        break;
      case "signupRef":
        this.signupRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        break;
      default:
        console.log(
          "Don't know where to scroll to... So let's scroll to singup!"
        );
        this.signupRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }
  };

  render() {
    return (
      <div>
        <MediaQuery maxDeviceWidth={768}>
          <Router>
            <div id="mobile-page">
              <Nav mobile={true} onLanguageHandle={this.onLanguageHandle} />
              <div id="eltaskyline">
                <img src={elta} alt="Electronic&nbsp;Tales skyline" />
              </div>
              <div id="mobile-main">
                <div className="section" id="section-presentation">
                  <Presentation
                    mobile={true}
                    language={this.state.language}
                    scrollToASpecificDiv={this.scrollToASpecificDiv}
                  />
                </div>
                <div className="section light-background">
                  <div ref={this.whyRef} className="ref-wrapper">
                    <Why
                      mobile={true}
                      language={this.state.language}
                      scrollToASpecificDiv={this.scrollToASpecificDiv}
                    />
                  </div>
                </div>
                <div className="section dark-background">
                  <Concept mobile={true} language={this.state.language} />
                </div>
                <div className="section light-background">
                  <Tracks mobile={true} language={this.state.language} />
                </div>
                <div className="section dark-background">
                  <Progress mobile={true} language={this.state.language} />
                </div>
                <div className="section light-background">
                  <div ref={this.signupRef} className="ref-wrapper">
                    <Signup
                      mobile={true}
                      language={this.state.language}
                      scrollToASpecificDiv={this.scrollToASpecificDiv}
                    />
                  </div>
                </div>
                <div className="section dark-background">
                  <Team
                    mobile={true}
                    language={this.state.language}
                    scrollToASpecificDiv={this.scrollToASpecificDiv}
                  />
                </div>
              </div>
              <Footer mobile={true} language={this.state.language} />
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
    );
  }
}

export default withTranslation()(App);
