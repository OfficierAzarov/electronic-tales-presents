import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';
import MediaQuery from 'react-responsive';

import Nav from './nav/Nav.js';
import Footer from './footer/Footer.js';
import Presentation from './main/presentation/Presentation.js';
import Why from './main/why/Why.js';
import Concept from './main/concept/Concept.js';
import Programme from './main/programme/Programme.js';
import Signup from './main/signup/Signup.js';
import Team from './main/team/Team.js';

import './App.css';

import elta from '../src/resources/img/eltaskyline.svg';

// class Anne extends React.Component {

//   // Javascript classique
//   console.log("Coucou");

//   // Pseudo HTML (= JSX)
//   render() {
//     return (

//     )
//   }

// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.whyRef = React.createRef();
    this.signupRef = React.createRef();
  }

  state = {
    currentPath: null,
    language: '',
  };

  componentDidMount() {
    if (i18next.language.includes('en') || i18next.language.includes('fr')) {
      this.setState({ language: i18next.language });
    } else {
      this.setState({ language: 'en' });
    }
  }

  getCurrentPath = currentPathFromChild => {
    this.setState({ currentPath: currentPathFromChild });
  };

  onLanguageHandle = newLang => {
    if (newLang != i18next.language) {
      i18next.changeLanguage(newLang, this.setState({ language: newLang }));
    }
  };

  scrollToASpecificDiv = divReference => {
    switch (divReference) {
      case 'whyRef':
        this.whyRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;
      case 'signupRef':
        this.signupRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;
      default:
        console.log(
          "Don't know where to scroll to... So let's scroll to singup!"
        );
        this.signupRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
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
                <img src={elta} alt="" />
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
                  <Programme mobile={true} language={this.state.language} />
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
                <img src={elta} aria-hidden="true" />
              </div>
              <div id="main">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Presentation
                        currentPath="/"
                        passCurrentPath={this.getCurrentPath}
                        language={this.state.language}
                      />
                    }
                  />
                  <Route
                    path="/why"
                    element={
                      <Why
                        currentPath="/why"
                        passCurrentPath={this.getCurrentPath}
                        language={this.state.language}
                      />
                    }
                  />
                  <Route
                    path="/concept"
                    element={
                      <Concept
                        currentPath="/concept"
                        passCurrentPath={this.getCurrentPath}
                        language={this.state.language}
                      />
                    }
                  />
                  <Route
                    path="/programme"
                    element={
                      <Programme
                        currentPath="/programme"
                        passCurrentPath={this.getCurrentPath}
                        language={this.state.language}
                      />
                    }
                  />
                  <Route
                    path="/signup"
                    element={
                      <Signup
                        currentPath="/signup"
                        passCurrentPath={this.getCurrentPath}
                        language={this.state.language}
                      />
                    }
                  />
                  <Route
                    path="/team"
                    element={
                      <Team
                        currentPath="/team"
                        passCurrentPath={this.getCurrentPath}
                        language={this.state.language}
                      />
                    }
                  />
                </Routes>
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
