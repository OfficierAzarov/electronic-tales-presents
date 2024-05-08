import React from 'react';
import { compose } from 'recompose';
import { withTranslation } from 'react-i18next';

import withDisplay from '../../elements/HOC/withDisplay';
import Button from '../../elements/buttons/Button';
import Event from './event/Event';
import Emoji from '../../elements/Emoji';
import * as Utils from '../../utils/Utils';
import text from '../../locate/fr/translate.json';

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
    const programme = text.translations.programme;

    const events = [];

    for (const eventKey in programme) {
      if (eventKey === 'button') {
        continue;
      }
      const event = programme[eventKey];
      events.push(
        <Event
          key={eventKey}
          title={event.title}
          infos={event.infos}
          subtitle={event.subtitle}
          description={event.description}
        />
      );
    }

    return (
      <div id="programme">
        <h3>Programme</h3>
        <div id="text-container">{events}</div>
        {this.props.mobile ? (
          ''
        ) : (
          <Button text={t('programme.button')} goto="/signup" />
        )}
      </div>
    );
  }
}


export default compose(withDisplay, withTranslation())(Programme);
