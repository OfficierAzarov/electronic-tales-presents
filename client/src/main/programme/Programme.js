import React from 'react';
import { compose } from 'recompose';
import { withTranslation } from 'react-i18next';

import withDisplay from '../../elements/HOC/withDisplay';
import Button from '../../elements/buttons/Button';
import Event from './event/Event';

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
          <Event />
        </div>
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
