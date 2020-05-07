import React from "react";

import InteractiveHeader from "../../elements/interactive-header/InteractiveHeader";
import ConceptItems from "./concept-items/ConceptItems";
import Button from "../../elements/buttons/Button";
import { emitCurrentPath } from "../../utils/Utils";

import "./Concept.css";

class Concept extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  state = {
    isShown: false,
    isTranslated: false,
    scroll: true,
  };

  headerTexts = {
    big:
      "À Electronic Tales, on veut rendre <br/>la computer culture <em>human readable</em>.",
    middle: "C'est-à-dire accessible &agrave; tous&middot;tes.",
    little:
      'Pour cela, on s\'est assis&middot;e&middot;s, <span className="strike">on a mang&eacute; des tartines au beurre demi-sel,</span> on a r&eacute;flechi, on a d&eacute;fini des axes (et ourdi des concepts).',
  };

  componentDidMount() {
    // passes the location fo the app (current path) to the parent (App.js)
    emitCurrentPath(this.props);

    this.goUp(this.adaptDisplay);
  }

  goUp = (callback) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(callback, 500);
  };

  adaptDisplay = () => {
    if (document.body.scrollTop === 0) {
      if (window.innerHeight < 800) {
        window.addEventListener("scroll", this.pop);
      } else {
        this.setState({ isShown: true });
      }
    }
  };

  pop = () => {
    if (this.state.scroll) {
      this.setState(
        { isShown: true, isTranslated: true },
        this.setState({ scroll: false })
      );
    }
  };

  scrollDown = () => {
    this.ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  render() {
    return (
      <div id="concept" className="animated">
        <InteractiveHeader
          bigText={this.headerTexts.big}
          middleText={this.headerTexts.middle}
          littleText={this.headerTexts.little}
          isShown={this.state.isShown}
        />
        <div ref={this.ref}>
          <ConceptItems
            isShown={this.state.isShown}
            isTranslated={this.state.isTranslated}
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

export default Concept;
