import React from "react";

import withDisplay from "../../elements/with-display/withDisplay";
import InteractiveHeader from "../../elements/interactive-header/InteractiveHeader";
import ConceptItems from "./concept-items/ConceptItems";
import Button from "../../elements/buttons/Button";
import * as Utils from "../../utils/Utils";

import "./Concept.css";

class Concept extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  headerTexts = {
    big:
      "À Electronic&nbsp;Tales, on veut rendre la computer culture <em>human readable</em>.",
    middle: "C'est-à-dire accessible &agrave; tous&middot;tes.",
    little:
      "Pour cela, on s'est assis&middot;e&middot;s, <strike>on a mang&eacute; des tartines au beurre demi-sel,</strike> on a r&eacute;flechi, on a d&eacute;fini des axes (et ourdi des concepts).",
  };

  scrollDown = () => {
    this.ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  render() {
    return (
      <div id="concept">
        <InteractiveHeader
          bigText={Utils.convertToCleanHtml(this.headerTexts.big)}
          middleText={Utils.convertToCleanHtml(this.headerTexts.middle)}
          littleText={Utils.convertToCleanHtml(this.headerTexts.little)}
          isShown={this.props.isShown}
          isClickable={!this.props.isShown}
          scrollDown={this.scrollDown}
        />
        <div ref={this.ref} className="ref-wrapper">
          <ConceptItems
            isShown={this.props.isShown}
            isTranslated={this.props.isTranslated}
          />
        </div>
        <Button
          text="Super&nbsp;! Et concr&egrave;tement&nbsp;?"
          goto="/tracks"
        />
      </div>
    );
  }
}

export default withDisplay(Concept);
