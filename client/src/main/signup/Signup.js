import React from "react";

import withDisplay from "../../elements/HOC/with-display/withDisplay";

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
          <h2>Comment nous aider&nbsp;?</h2>
        </div>
        <div>
          <p>&Eacute;cris ton email là.</p>
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
              />
              <p onClick={this.scrollDown}>
                Minute, papillon&nbsp;! Qu'est-ce qui m'arrive si je vous file
                mon mail&nbsp;?
              </p>
            </div>
          )}
        </div>
        <div ref={this.ref} className="ref-wrapper">
          <SignupSteps
            isShown={this.props.isShown}
            isTranslated={this.props.isTranslated}
            scrollUp={this.scrollUp}
          />
        </div>
      </div>
    );
  }
}

export default withDisplay(Signup);
