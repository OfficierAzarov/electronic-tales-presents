import React from "react";
import { withTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";

import Button from "../../elements/buttons/Button";
import Emoji from "../../elements/Emoji";

import { emitCurrentPath } from "../../utils/Utils";

import "./Why.css";

class Why extends React.Component {
  componentDidMount() {
    if (!this.props.mobile) {
      // passes the location fo the app (current path) to the parent (App.js)
      if (this.props.passCurrentPath) emitCurrentPath(this.props);

      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  render() {
    const { t } = this.props;

    if (this.props.mobile) {
      return (
        <div id="why">
          <div id="content-container">
            <div id="text-container">
              <Slide bottom duration={2000}>
                <h3>{t('why.bigText')}</h3>
                <div id="video-container">
                  {this.props.language.includes('fr') ? (
                    <iframe
                      title="teaser"
                      width="560"
                      height="315"
                      src="https://www.youtube-nocookie.com/embed/i4N0fzPftos"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  ) : (
                    <iframe
                      title="teaser"
                      width="560"
                      height="315"
                      src="https://www.youtube-nocookie.com/embed/VKng_oWILQI"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  )}
                </div>
              </Slide>
              <ul>
                <Slide bottom>
                  <li>
                    <Emoji
                      symbol="☁️"
                      label="cloud"
                      size="3em"
                      marginBottom="1%"
                    />
                    {t('why.bullet1')}
                  </li>
                </Slide>
                <Slide bottom>
                  <li>
                    <Emoji
                      symbol="🌈"
                      label="rainbow"
                      size="3em"
                      marginBottom="1%"
                    />
                    {t('why.bullet2')}
                  </li>
                </Slide>
              </ul>
            </div>
          </div>
          <button
            className="button-design"
            onClick={() => this.props.scrollToASpecificDiv('signupRef')}
          >
            {t('common.callToAction')}
          </button>
        </div>
      );
    } else {
      return (
        <div id="why" className="animated">
          <div id="content-container">
            <div id="text-container">
              <h3>{t("why.bigText")}</h3>
              <ul>
                <li>
                  <Emoji
                    symbol="☁️"
                    label="cloud"
                    size="1.5em"
                    marginRight="1%"
                  />
                  {t("why.bullet1")}
                </li>
                <li>
                  <Emoji
                    symbol="🌈"
                    label="rainbow"
                    size="1.5em"
                    marginRight="1%"
                  />
                  {t("why.bullet2")}
                </li>
              </ul>
            </div>
            <div id="video-container">
              {this.props.language.includes("fr") ? (
                <iframe
                  title="teaser"
                  width="560"
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/i4N0fzPftos"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              ) : (
                <iframe
                  title="teaser"
                  width="560"
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/VKng_oWILQI"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              )}
            </div>
          </div>
          <Button text={t("why.button")} goto="/concept" />
        </div>
      );
    }
  }
}

export default withTranslation()(Why);
