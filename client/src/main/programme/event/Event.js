import React from 'react';
import { compose } from 'recompose';
import { withTranslation } from 'react-i18next';
import * as Utils from '../../../utils/Utils';
import withDisplay from '../../../elements/HOC/withDisplay';

const Event = props => {
  const { t } = props;
  return (
    <div className="event">
      <h4
        dangerouslySetInnerHTML={Utils.convertToCleanHtml(
          t('programme.${props.eventNumber}.title')
        )}
      ></h4>
      <p
        className="infos"
        dangerouslySetInnerHTML={Utils.convertToCleanHtml(
          t('programme.${props.eventNumber}.infos')
        )}
      ></p>
      <p
        className="subtitle"
        dangerouslySetInnerHTML={Utils.convertToCleanHtml(
          t('programme.${props.eventNumber}.subtitle')
        )}
      ></p>
      <p
        dangerouslySetInnerHTML={Utils.convertToCleanHtml(
          t('programme.${props.eventNumber}.description')
        )}
      ></p>
    </div>
  );
};

export default compose(withDisplay, withTranslation())(Event);
