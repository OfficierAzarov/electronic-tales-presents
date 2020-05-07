import React from 'react';

import Map from './map/Map';
import { emitCurrentPath } from '../../utils/Utils';

import './Progress.css';

class Progress extends React.Component {

    componentDidMount() {
        // passes the location fo the app (current path) to the parent (App.js)
        emitCurrentPath(this.props);

        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    render() {
        return(
            <div>
                <div className="h-container">
                    <h2>Roadmap</h2>
                    <h3>Enfin, où on en est, quoi.</h3>
                    <h4>(Mais ça sonne mieux, «&nbsp;roadmap&nbsp;», non&nbsp;?)</h4>
                    <i className="fas fa-chevron-down"></i>
                    {/* <i className="fas fa-chevron-down"
                    style={{opacity: this.state.isShown || window.innerHeight > 800 ? 0 : 1}}
                    onClick={this.scrollDown}></i> */}
                </div>
            <Map />

            </div>
        )
    }

}

export default Progress;