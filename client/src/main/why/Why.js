import React from 'react';
import { Link } from 'react-router-dom';
import Emoji from '../../elements/Emoji';
import { emitCurrentPath } from '../../utils/Utils';


import './Why.css';
import trailer from '../../resources/video/trailer-wip.mp4';

class Why extends React.Component {

    componentDidMount() {
        // passes the location fo the app (current path) to the parent (App.js)
        emitCurrentPath(this.props);

        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    render() {
        return (
            <div id="why" className="animated">
                <div id="content-container"> 
                    <div id="text-container">
                        <h3>Dégommons le syndrome de l'imposteur ensemble&nbsp;!</h3>
                        <ul>
                            <li>
                                <Emoji symbol="🍰" label="shortcake" size="1.2em"/>
                                &nbsp;Plateforme open-source et 100 % gratuite&nbsp;
                            </li>                            
                            <li>
                                <Emoji symbol="🌈" label="rainbow" size="1.5em"/>
                                &nbsp;Fabriquée avec amour par des devs féministes, queers, inclusifs·ves et autres personnes fucking bienveillant·e·s
                            </li>                          
                            <li>
                                <Emoji symbol="📆" label="tear-off calendar" size="1.2em"/>
                                &nbsp;Sortie prévue pour la rentrée 2020&nbsp;
                            </li>
                        </ul>
                    </div>
                    <div id="video-container">
                        <video loop autoPlay controls>
                            <source src={trailer} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div id="why-button-wrap" to="/concept">
                    <button id="why-button" className="button-design">
                        <Link to="/concept">
                            Youpi, dites-m'en plus&nbsp;!
                        </Link>
                    </button>
                </div>
            </div>
        );
    }
}


export default Why;