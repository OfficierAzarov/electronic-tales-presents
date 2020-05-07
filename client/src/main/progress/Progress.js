import React from 'react';

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
            

                <div id="map">
                    <div id="progress-container">
                        <span id="progress-bar"></span>
                        <div className="station-container">
                            <span className="station"></span>
                            <div className="names-container">
                                <p>Idée</p>
                                <p className="comment">Tu crois vraiment que c'est une bonne idée&nbsp;?</p>
                            </div>
                        </div>
                        <div className="station-container">
                            <span className="station"></span>
                            <div className="names-container">
                                <p>Brainstorrrrm</p>
                                <p className="comment">Il reste des Kinder Country&nbsp;?</p>
                            </div>
                        </div>
                        <div className="station-container">
                            <div id="here-station-container">
                                <i className="fas fa-long-arrow-alt-right"></i>
                                <span className="station" id="here-station"></span>
                            </div>
                            <div className="names-container">
                                <p id="here-name">On parle de notre projet</p>
                                <p className="comment">Vous êtes ici&nbsp;!</p>
                            </div>
                        </div>
                        <div className="station-container">
                            <span className="station"></span>
                            <div className="names-container">
                                <p>Recueil de vos idées</p>
                                <p className="comment">On mouline, on analyse, on cogito ergo sum.</p>
                            </div>
                        </div>
                        <div className="station-container">
                            <span className="station"></span>
                            <div className="names-container">
                                <p>Release de la plateforme Electronic Tales</p>
                                <p className="comment">On dégomme le syndrome de l'imposteur ensemble&nbsp;!</p>
                            </div>
                        </div>
                        <div className="station-container">
                            <span className="station"></span>
                            <div className="names-container">
                                <p>Community life&nbsp;: workshops, cours du soir...</p>
                                <p className="comment">On continue à dégommer.</p>
                            </div>
                        </div>
                        <div className="station-container">
                            <span className="station"></span>
                            <div className="names-container">
                                <p>Paix sur la Terre</p>
                                <p className="comment">Ou juste un milieu tech plus gentil et plus inclusif, pour commencer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Progress;