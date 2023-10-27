import React from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

import "./Nav.css";

import logo from "../resources/img/logo-transparent.png";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.isActive = this.isActive.bind(this);
  }

  isActive(elementName) {
    if (this.props.currentPath !== null) {
      return this.props.currentPath === elementName ? "active" : null;
    }
  }

  render() {
    const { t } = this.props;
    if (this.props.mobile) {
      return (
        <nav>
          <img src={logo} alt="Electronic&nbsp;Tales accueil" />
          <div id="language-switch">
            <span onClick={() => this.props.onLanguageHandle("fr")}>fr </span>|
            <span onClick={() => this.props.onLanguageHandle("en")}> en</span>
          </div>
        </nav>
      );
    } else {
      return (
        <nav>
          <div id="logo">
            <Link to="/">
              <img src={logo} alt="Electronic&nbsp;Tales accueil" />
            </Link>
          </div>
          <div id="nav-links" className="desktop-visible">
            <Link to="/why" className={this.isActive('/why')}>
              {t('nav.links.1')}
            </Link>
            <Link to="/concept" className={this.isActive('/concept')}>
              {t('nav.links.2')}
            </Link>
            <Link to="/programme" className={this.isActive('/programme')}>
              {t('nav.links.3')}
            </Link>
            <Link to="/signup" className={this.isActive('/signup')}>
              {t('nav.links.5')}
            </Link>
          </div>
          <div id="language-switch">
            <span onClick={() => this.props.onLanguageHandle('fr')}>fr </span>|
            <span onClick={() => this.props.onLanguageHandle('en')}> en</span>
          </div>
          <button id="nav-button" className="button-design">
            <Link to="/signup">{t('nav.button')}</Link>
          </button>
        </nav>
      );
    }
  }
}

export default withTranslation()(Nav);
