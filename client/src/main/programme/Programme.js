import React from 'react';
import { compose } from 'recompose';
import { withTranslation } from 'react-i18next';

import withDisplay from '../../elements/HOC/withDisplay';
import Button from '../../elements/buttons/Button';
import Emoji from '../../elements/Emoji';
import * as Utils from '../../utils/Utils';

import './Programme.css';

class Programme extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollDown = () => {
    this.ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  render() {
    const { t } = this.props;

    return (
      <div id="programme">
        <h3>Programme</h3>
        <div id="text-container">
          <div class="event">
            <h4
              dangerouslySetInnerHTML={Utils.convertToCleanHtml(
                t('programme.event1.title')
              )}
            ></h4>
            <p
              class="infos"
              dangerouslySetInnerHTML={Utils.convertToCleanHtml(
                t('programme.event1.infos')
              )}
            ></p>
            <p
              class="subtitle"
              dangerouslySetInnerHTML={Utils.convertToCleanHtml(
                t('programme.event1.subtitle')
              )}
            ></p>
            <p
              dangerouslySetInnerHTML={Utils.convertToCleanHtml(
                t('programme.event1.description')
              )}
            ></p>
          </div>

          <div class="event">
            <h4
              dangerouslySetInnerHTML={Utils.convertToCleanHtml(
                t('programme.event2.title')
              )}
            ></h4>
            <p
              class="infos"
              dangerouslySetInnerHTML={Utils.convertToCleanHtml(
                t('programme.event2.infos')
              )}
            ></p>
            <p
              class="subtitle"
              dangerouslySetInnerHTML={Utils.convertToCleanHtml(
                t('programme.event2.subtitle')
              )}
            ></p>
            <p
              dangerouslySetInnerHTML={Utils.convertToCleanHtml(
                t('programme.event2.description')
              )}
            ></p>
          </div>
          <div class="event">
            <h4
              dangerouslySetInnerHTML={Utils.convertToCleanHtml(
                t('programme.event3.title')
              )}
            ></h4>
            <p
              class="infos"
              dangerouslySetInnerHTML={Utils.convertToCleanHtml(
                t('programme.event3.infos')
              )}
            ></p>
            <p
              class="subtitle"
              dangerouslySetInnerHTML={Utils.convertToCleanHtml(
                t('programme.event3.subtitle')
              )}
            ></p>
            <p
              dangerouslySetInnerHTML={Utils.convertToCleanHtml(
                t('programme.event3.description')
              )}
            ></p>
          </div>
        </div>
        <Button text={t('programme.button')} goto="/signup" />
      </div>
    );
  }
}

export default compose(withDisplay, withTranslation())(Programme);
