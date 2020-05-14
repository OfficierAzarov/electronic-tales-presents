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
    if (this.props.mobile === "y") {
      return (
        <nav>
          <img src={logo} alt="Electronic&nbsp;Tales logo" />
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
              <img src={logo} alt="Electronic&nbsp;Tales logo" />
            </Link>
          </div>
          <div id="nav-links" className="desktop-visible">
            <Link to="/why" className={this.isActive("/why")}>
              {t("nav.links.1")}
            </Link>
            <Link to="/concept" className={this.isActive("/concept")}>
              {t("nav.links.2")}
            </Link>
            <Link to="/tracks" className={this.isActive("/tracks")}>
              {t("nav.links.3")}
            </Link>
            <Link to="/progress" className={this.isActive("/progress")}>
              {t("nav.links.4")}
            </Link>
            <Link to="/signup" className={this.isActive("/signup")}>
              {t("nav.links.5")}
            </Link>
          </div>
          <div id="language-switch">
            <span onClick={() => this.props.onLanguageHandle("fr")}>fr </span>|
            <span onClick={() => this.props.onLanguageHandle("en")}> en</span>
          </div>
          <button id="nav-button" className="button-design">
            <Link to="/signup">{t("nav.button")}</Link>
          </button>
        </nav>
      );
    }
  }
}

export default withTranslation()(Nav);
