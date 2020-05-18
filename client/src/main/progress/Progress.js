import React from "react";
import { compose } from "recompose";
import { withTranslation } from "react-i18next";

import withDisplay from "../../elements/HOC/withDisplay";
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

  scrollDown = () => {
    this.ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  render() {
    const { t } = this.props;

    if (this.props.mobile) {
      return (
        <div id="progress">
          <InteractiveHeader
            bigText={Utils.convertToCleanHtml(t("progress.header.bigText"))}
            middleText={Utils.convertToCleanHtml(
              t("progress.header.middleText")
            )}
            littleText={Utils.convertToCleanHtml(
              t("progress.header.littleText")
            )}
            mobile={this.props.mobile}
          />
          <Map language={this.props.language} mobile={this.props.mobile} />
        </div>
      );
    } else {
      return (
        <div id="progress">
          <InteractiveHeader
            bigText={Utils.convertToCleanHtml(t("progress.header.bigText"))}
            middleText={Utils.convertToCleanHtml(
              t("progress.header.middleText")
            )}
            littleText={Utils.convertToCleanHtml(
              t("progress.header.littleText")
            )}
            isShown={this.props.isShown}
            isClickable={!this.props.isShown}
            scrollDown={this.scrollDown}
          />
          <div ref={this.ref} className="ref-wrapper-padded">
            <Map
              isShown={this.props.isShown}
              isTranslated={this.props.isTranslated}
              language={this.props.language}
            />
          </div>
          <div id="corrective-button-wrapper">
            <Button text={t("progress.button")} goto="/signup" />
          </div>
        </div>
      );
    }
  }
}

export default compose(withDisplay, withTranslation())(Progress);
