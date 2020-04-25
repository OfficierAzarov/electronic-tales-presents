import React from 'react';
import '../notification/Notification.css';

import Subscribe from '../subscribe/Subscribe';

class Notification extends React.Component {



    render() {
        return (
            <div className={`notification ${this.props.level}`}>
                <p>{this.props.message}</p>
            </div>
        )
    }
}

export default Notification;