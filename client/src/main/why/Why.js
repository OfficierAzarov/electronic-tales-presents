import React from 'react';

import Button from '../../elements/buttons/Button';
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
<<<<<<< HEAD
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
=======
                            <li><Emoji symbol="🍰" label="shortcake" size="2em"/>Plateforme open-source et 100 % gratuite&nbsp;</li>
                            <li>🌈 Fabriquée avec amour par des devs féministes, queers, inclusifs·ves et autres personnes fucking bienveillant·e·s</li>
                            <li>📆 Sortie prévue pour la rentrée 2020&nbsp;</li>
>>>>>>> 92c8212d59617c6ff6ba926a331bdfa76a302b66
                        </ul>
                    </div>
                    <div id="video-container">
                        <video loop autoPlay controls>
                            <source src={trailer} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <Button 
                    text="Youpi, dites-m'en plus&nbsp;!"
                    goto="/concept" />
            </div>
        );
    }
}


export default Why;