import React from "react";

import withDisplay from "../../elements/with-display/withDisplay";
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
    console.log(this.props.language);
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
    return (
      <div id="tracks">
        <InteractiveHeader
          bigText={Utils.convertToCleanHtml(this.headerTexts.big)}
          middleText={Utils.convertToCleanHtml(this.headerTexts.middle)}
          littleText={Utils.convertToCleanHtml(this.headerTexts.little)}
          isShown={this.props.isShown}
          isClickable={!this.props.isShown}
          scrollDown={this.scrollDown}
        />
        <div ref={this.ref} className="ref-wrapper">
          <TracksTabs
            isShown={this.props.isShown}
            isTranslated={this.props.isTranslated}
            language={this.props.language}
          />
        </div>
        <Button
          text="Et ça avance bien, cette histoire&nbsp;?"
          goto="/progress"
        />
      </div>
    );
  }
}

export default withDisplay(Tracks);
