import React, { Component } from 'react';
import i18next from 'i18next';
import withAPITranslation from '../../../elements/HOC/withAPITranslation';
import * as Utils from '../../../utils/Utils';

import './Event.css';

class Event extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  render() {
    const { t } = this.props;

    if (this.props.mobile) {
      // ---- MOBILE VERSION ----
      return <></>;
    } else {
      return (
        <div className="event">
          <h4
            dangerouslySetInnerHTML={Utils.convertToCleanHtml(this.props.title)}
          ></h4>
          <p
            className="infos"
            dangerouslySetInnerHTML={Utils.convertToCleanHtml(this.props.infos)}
          ></p>
          <p
            className="subtitle"
            dangerouslySetInnerHTML={Utils.convertToCleanHtml(
              this.props.subtitle
            )}
          ></p>
          <p
            dangerouslySetInnerHTML={Utils.convertToCleanHtml(
              this.props.description
            )}
          ></p>
        </div>
      );
    }
  }
}

export default withAPITranslation(Event);
