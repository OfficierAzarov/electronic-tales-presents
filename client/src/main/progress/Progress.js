import React from "react";

import withDisplay from "../../elements/with-display/withDisplay";
import InteractiveHeader from "../../elements/interactive-header/InteractiveHeader";
import Map from "./map/Map";
import Button from "../../elements/buttons/Button";
import * as Utils from "../../utils/Utils";

import "./Progress.css";

class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  headerTexts = {
    big: "Roadmap",
    middle: "Enfin, où on en est, quoi.",
    little: "Mais ça sonne mieux, «&nbsp;roadmap&nbsp;», non&nbsp;?",
  };

  scrollDown = () => {
    this.ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  render() {
    return (
      <div>
        <InteractiveHeader
          bigText={Utils.convertToCleanHtml(this.headerTexts.big)}
          middleText={Utils.convertToCleanHtml(this.headerTexts.middle)}
          littleText={Utils.convertToCleanHtml(this.headerTexts.little)}
          isShown={this.props.isShown}
          isClickable={!this.props.isShown}
          scrollDown={this.scrollDown}
        />
        <div ref={this.ref} className="ref-wrapper">
          <Map
            isShown={this.props.isShown}
            isTranslated={this.props.isTranslated}
          />
        </div>
        <Button text="Je participe&nbsp;!" goto="/signup" />
      </div>
    );
  }
}

export default withDisplay(Progress);
