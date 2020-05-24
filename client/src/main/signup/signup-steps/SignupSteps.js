import React, { Component } from "react";
import i18next from "i18next";
import Slide from "react-reveal/Slide";

import withAPITranslation from "../../../elements/HOC/withAPITranslation";
import * as Utils from "../../../utils/Utils";

import "./SignupSteps.css";

import grateful from "../../../resources/img/grateful.gif";

class SignupSteps extends Component {
  state = {
    isShown: false,
    isTranslated: false,
    steps: [],
  };

  componentDidMount() {
    // passes the immplementation of generate method to i18next HOC
    this.props.implementGenerate(this.generate);
  }

  componentDidUpdate(prevProps) {
    if (this.props.isShown !== prevProps.isShown) {
      this.setState({ isShown: this.props.isShown });
    }
    if (this.props.isTranslated !== prevProps.isTranslated) {
      this.setState({ isTranslated: this.props.isTranslated });
    }
  }

  generate = () => {
    this.setState({
      steps: [
        {
          id: 1,
          desc: i18next.t("signup.signupSteps.steps.id1.desc"),
        },
        {
          id: 2,
          desc: i18next.t("signup.signupSteps.steps.id2.desc"),
        },
        {
          id: 3,
          desc: i18next.t("signup.signupSteps.steps.id3.desc"),
        },
        {
          id: 4,
          desc: i18next.t("signup.signupSteps.steps.id4.desc"),
        },
      ],
    });
  };

  render() {
    // ---- MOBILE VERSION ----
    if (this.props.mobile) {
      return (
        <div id="steps-container">
          {this.state.steps.map((step) => (
            <Slide key={step.id} bottom>
              <div className="regular-steps">
                <h4 className="shine-bright">{step.id}</h4>
                <p
                  dangerouslySetInnerHTML={Utils.convertToCleanHtml(step.desc)}
                ></p>
                {step.id === this.state.steps.length ? (
                  <div>
                    <img src={grateful} />
                    <p>{i18next.t("signup.signupSteps.steps.id4.question")}</p>
                    <p>
                      {i18next.t(
                        "signup.signupSteps.steps.id4.callToAction.beforeLink"
                      )}
                      <span
                        onClick={() => {
                          this.props.scrollToASpecificDiv("signupRef");
                        }}
                      >
                        {i18next.t(
                          "signup.signupSteps.steps.id4.callToAction.link"
                        )}
                      </span>
                      {i18next.t(
                        "signup.signupSteps.steps.id4.callToAction.afterLink"
                      )}
                    </p>
                  </div>
                ) : null}
              </div>
            </Slide>
          ))}
        </div>
      );
    } else {
      return (
        // ---- DESKTOP VERSION ----

        <div
          id="steps-container"
          style={{
            opacity: this.state.isShown ? 1 : 0,
            transform: this.state.isTranslated ? "translateY(-8%)" : "",
          }}
        >
          {this.state.steps.map((step) => (
            <div key={step.id} className="regular-steps">
              <h4 className="shine-bright">{step.id}</h4>
              <p
                dangerouslySetInnerHTML={Utils.convertToCleanHtml(step.desc)}
              ></p>
              {step.id === this.state.steps.length ? (
                <div>
                  <img src={grateful} />
                  <p>{i18next.t("signup.signupSteps.steps.id4.question")}</p>
                  <p>
                    {i18next.t(
                      "signup.signupSteps.steps.id4.callToAction.beforeLink"
                    )}
                    <span onClick={this.props.scrollUp}>
                      {i18next.t(
                        "signup.signupSteps.steps.id4.callToAction.link"
                      )}
                    </span>
                    {i18next.t(
                      "signup.signupSteps.steps.id4.callToAction.afterLink"
                    )}
                  </p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      );
    }
  }
}

export default withAPITranslation(SignupSteps);
