import React from "react";
import { compose } from "recompose";
import { withTranslation } from "react-i18next";

import withDisplay from "../../elements/HOC/withDisplay";
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

  scrollDown = () => {
    this.ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  render() {
    const { t } = this.props;

    if (this.props.mobile === "y") {
      return (
        <div id="concept">
          <InteractiveHeader
            bigText={Utils.convertToCleanHtml(t("concept.header.bigText"))}
            middleText={Utils.convertToCleanHtml(
              t("concept.header.middleText")
            )}
            littleText={Utils.convertToCleanHtml(
              t("concept.header.littleText")
            )}
            mobile={this.props.mobile}
          />
          <ConceptItems
            language={this.props.language}
            mobile={this.props.mobile}
          />
        </div>
      );
    } else {
      return (
        <div id="concept">
          <InteractiveHeader
            bigText={Utils.convertToCleanHtml(t("concept.header.bigText"))}
            middleText={Utils.convertToCleanHtml(
              t("concept.header.middleText")
            )}
            littleText={Utils.convertToCleanHtml(
              t("concept.header.littleText")
            )}
            isShown={this.props.isShown}
            isClickable={!this.props.isShown}
            scrollDown={this.scrollDown}
          />
          <div ref={this.ref} className="ref-wrapper">
            <ConceptItems
              isShown={this.props.isShown}
              isTranslated={this.props.isTranslated}
              language={this.props.language}
            />
          </div>
          <Button text={t("concept.button")} goto="/tracks" />
        </div>
      );
    }
  }
}

export default compose(withDisplay, withTranslation())(Concept);
