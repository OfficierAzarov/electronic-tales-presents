import React from "react";
import { compose } from "recompose";
import { withTranslation } from "react-i18next";

import withDisplay from "../../elements/HOC/with-display/withDisplay";
import InteractiveHeader from "../../elements/interactive-header/InteractiveHeader";
import TracksTabs from "./tracks-tabs/TracksTabs";
import Button from "../../elements/buttons/Button";
import * as Utils from "../../utils/Utils";

import "./Tracks.css";

class Tracks extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  headerTexts = {
    big: "Notre (future) plateforme.",
    middle:
      "Pour donner vie à ces idées, notre team est en train de concocter une plateforme de learning social.",
    little:
      "Celle-ci servira de fondation au projet Electronic&nbsp;Tales et sera construite autour de&nbsp;trois&nbsp;tracks d'apprentissage.",
  };

  scrollDown = () => {
    this.ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  render() {
    const { t } = this.props;

    return (
      <div id="tracks">
        <InteractiveHeader
          bigText={Utils.convertToCleanHtml(t("tracks.header.bigText"))}
          middleText={Utils.convertToCleanHtml(t("tracks.header.middleText"))}
          littleText={Utils.convertToCleanHtml(t("tracks.header.littleText"))}
          isShown={this.props.isShown}
          isClickable={!this.props.isShown}
          scrollDown={this.scrollDown}
        />
        <div ref={this.ref} className="ref-wrapper-padded">
          <TracksTabs
            isShown={this.props.isShown}
            isTranslated={this.props.isTranslated}
            language={this.props.language}
          />
        </div>
        <Button text={t("tracks.button")} goto="/progress" />
      </div>
    );
  }
}

export default compose(withDisplay, withTranslation())(Tracks);
