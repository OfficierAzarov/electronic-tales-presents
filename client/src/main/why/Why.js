import React from "react";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import Button from "../../elements/buttons/Button";
import Emoji from "../../elements/Emoji";

import { emitCurrentPath } from "../../utils/Utils";

import "./Why.css";

import trailer from "../../resources/video/trailer-wip.mp4";

class Why extends React.Component {
  componentDidMount() {
    if (this.props.mobile !== "y") {
      // passes the location fo the app (current path) to the parent (App.js)
      if (this.props.passCurrentPath) emitCurrentPath(this.props);

      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  render() {
    const { t } = this.props;

    if (this.props.mobile === "y") {
      return (
        <div id="why">
          <div id="content-container">
            <div id="text-container">
              <Fade bottom duration={2000} delay={1000}>
                <h3>{t("why.bigText")}</h3>
                <div id="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/i4N0fzPftos"
                    frameborder="0"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  {/* <video loop autoPlay controls>
                    <source src={trailer} type="video/mp4" />
                  </video> */}
                </div>
              </Fade>
              <ul>
                <Fade bottom duration={2000} delay={900}>
                  <li>
                    <Emoji
                      symbol="☁️"
                      label="cloud"
                      size="1.5em"
                      marginBottom="1%"
                    />
                    {t("why.bullet1")}
                  </li>
                </Fade>
                <Fade bottom duration={2000}>
                  <li>
                    <Emoji
                      symbol="🌈"
                      label="rainbow"
                      size="1.4em"
                      marginBottom="1%"
                    />
                    {t("why.bullet2")}
                  </li>
                </Fade>
                <Fade bottom duration={2000}>
                  <li>
                    <Emoji
                      symbol="🍰"
                      label="shortcake"
                      size="1.2em"
                      marginBottom="1%"
                    />
                    {t("why.bullet3")}
                  </li>
                </Fade>
                <Fade bottom duration={2000}>
                  <li>
                    <Emoji
                      symbol="📆"
                      label="tear-off calendar"
                      size="1.2em"
                      marginBottom="1%"
                    />
                    {t("why.bullet4")}
                  </li>
                </Fade>
              </ul>
            </div>
          </div>
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
                <li>
                  <Emoji
                    symbol="🍰"
                    label="shortcake"
                    size="1.2em"
                    marginRight="1%"
                  />
                  {t("why.bullet3")}
                </li>
                <li>
                  <Emoji
                    symbol="📆"
                    label="tear-off calendar"
                    size="1.2em"
                    marginRight="1%"
                  />
                  {t("why.bullet4")}
                </li>
              </ul>
            </div>
            <div id="video-container">
              {/* <video loop autoPlay controls>
                <source src={trailer} type="video/mp4" />
              </video> */}
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/i4N0fzPftos"
                frameborder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <Button text={t("why.button")} goto="/concept" />
        </div>
      );
    }
  }
}

export default withTranslation()(Why);
