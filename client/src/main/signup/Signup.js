import React from "react";
import { compose } from "recompose";
import i18next from "i18next";

import withDisplay from "../../elements/HOC/with-display/withDisplay";
import withAPITranslation from "../../elements/HOC/withAPITranslation";
import * as Utils from "../../utils/Utils";

import Subscribe from "../../elements/form/subscribe/Subscribe.js";
import SignupSteps from "./signup-steps/SignupSteps";

import "./Signup.css";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  state = {
    status: "",
    message: "",
    isEmailSubmitted: false,
    subscriptionError: "",
  };

  configureNotification = ({ status, msg }) => {
    this.setState({ status: status, message: msg });
    this.setState({ isEmailSubmitted: true });
  };

  handleError = ({ status, msg }) => {
    this.setState({ status: status, message: msg });
    this.setState({ isEmailSubmitted: true });
  };

  scrollDown = () => {
    this.ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    return (
      <div id="signup" className="animated">
        <div className="h-container">
          <h2>{i18next.t("signup.header.bigText")}</h2>
        </div>
        <div>
          <p>{i18next.t("signup.form.action")}</p>
          {this.state.isEmailSubmitted && this.state.status !== "200" ? (
            <div className="notification failure">
              <p>{this.state.message}</p>
            </div>
          ) : (
            <div></div>
          )}
          {this.state.isEmailSubmitted && this.state.status === "200" ? (
            <div className="notification success">
              <p>{this.state.message}</p>
            </div>
          ) : (
            <div id="input-container">
              <Subscribe
                configureNotification={this.configureNotification}
                handleError={this.handleError}
                language={this.props.language}
              />
              <p onClick={this.scrollDown}>
                {i18next.t("signup.form.waitAMinute")}
              </p>
            </div>
          )}
        </div>
        <div ref={this.ref} className="ref-wrapper-padded">
          <SignupSteps
            isShown={this.props.isShown}
            isTranslated={this.props.isTranslated}
            scrollUp={this.scrollUp}
            language={this.props.language}
          />
        </div>
      </div>
    );
  }
}

export default compose(withDisplay, withAPITranslation)(Signup);
