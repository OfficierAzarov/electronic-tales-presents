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
                    <h4>(Mais ça sonne mieux, «&nbsp;roadmap&nbsp;», non&nbsp;? )</h4>
                    <i className="fas fa-chevron-down"></i>
                    {/* <i className="fas fa-chevron-down"
                    style={{opacity: this.state.isShown || window.innerHeight > 800 ? 0 : 1}}
                    onClick={this.scrollDown}></i> */}
                </div>
            

                <div id="map">
                    <div id="progress-container">
                        <span id="progress-bar"></span>
                        <div class="station-container">
                            <span class="station"></span>
                            <div class="names-container">
                                <p>Idée</p>
                                <p class="comment">Tu crois vraiment que c'est une bonne idée&nbsp;?</p>
                            </div>
                        </div>
                        <div class="station-container">
                            <span class="station"></span>
                            <div class="names-container">
                                <p>Brainstoooorm</p>
                                <p class="comment">Il reste des Kinder Country&nbsp;?</p>
                            </div>
                        </div>
                        <div class="station-container">
                            <span class="station" id="here"></span>
                            <div class="names-container">
                                <p>On parle de notre projet</p>
                                <p class="comment">Vous êtes ici&nbsp;!</p>
                            </div>
                        </div>
                        <div class="station-container">
                            <span class="station"></span>
                            <div class="names-container">
                                <p>Recueil de vos idées</p>
                                <p class="comment">On mouline, on analyse, on cogito ergo sum.</p>
                            </div>
                        </div>
                        <div class="station-container">
                            <span class="station"></span>
                            <div class="names-container">
                                <p>Release de la plateforme Electronic Tales</p>
                                <p class="comment">Dégommons le syndrome de l'imposteur ensemble&nbsp;!</p>
                            </div>
                        </div>
                        <div class="station-container">
                            <span class="station"></span>
                            <div class="names-container">
                                <p>Community life&nbsp;: workshops, cours du soir...</p>
                                <p class="comment">On continue à dégommer.</p>
                            </div>
                        </div>
                        <div class="station-container">
                            <span class="station"></span>
                            <div class="names-container">
                                <p>Paix sur la Terre</p>
                                <p class="comment">Ou juste un milieu tech plus gentil et plus inclusif, pour commencer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Progress;