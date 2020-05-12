import React from "react";
import i18next from "i18next";

import withAPITranslation from "../../elements/HOC/withAPITranslation";
import Button from "../../elements/buttons/Button";
import { emitCurrentPath } from "../../utils/Utils";

import "./Presentation.css";

class Presentation extends React.Component {
  state = {
    largeText: false,
    sentences: [],
  };

  componentDidMount() {
    if (this.props.mobile !== "y") {
      // passes the location fo the app (current path) to the parent (App.js)
      if (this.props.passCurrentPath) emitCurrentPath(this.props);

      if (window.innerHeight < 700) {
        this.setState({ largeText: true });
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    this.props.implementGenerate(this.generate);
  }

  generate = () => {
    this.setState({
      sentences: [
        i18next.t("presentation.question1"),
        i18next.t("presentation.question2"),
        i18next.t("presentation.question3"),
        i18next.t("presentation.question4"),
      ],
    });
  };

  render() {
    const { t } = this.props;

    if (this.props.mobile === "y") {
      return (
        <div id="presentation">
          <div className="h-container">
            <h2>{i18next.t("presentation.title")}</h2>
          </div>
          <ul>
            {this.state.sentences.map((sentence, i) => (
              <li key={i}>{sentence}</li>
            ))}
          </ul>
          <div id="animation-wrapper">
            <button className="button-design">
              {i18next.t("presentation.button")}
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div id="presentation">
          <div
            className="h-container"
            style={{ marginTop: this.state.largeText ? "3%" : "" }}
          >
            <h2 style={{ width: this.state.largeText ? "90%" : "" }}>
              {i18next.t("presentation.title")}
            </h2>
          </div>
          <ul>
            {this.state.sentences.map((sentence, i) => (
              <li key={i}>{sentence}</li>
            ))}
          </ul>
          <div id="animation-wrapper">
            <Button text={i18next.t("presentation.button")} goto="/why" />
          </div>
        </div>
      );
    }
  }
}

export default withAPITranslation(Presentation);
