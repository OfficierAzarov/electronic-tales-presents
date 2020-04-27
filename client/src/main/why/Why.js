import React from 'react';
import { Link } from 'react-router-dom';
import { emitCurrentPath } from '../../utils/Utils';


import './Why.css';
import confused from '../../resources/img/confused.gif';
import confused2 from '../../resources/img/confused2.gif';
import confused3 from '../../resources/img/confused3.gif';
import trailer from '../../resources/video/el-trailer.mp4';

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
                            <li>Plateforme open-source et 100 % gratuite</li>
                            <li>Fabriquée avec amour par des devs féministes, queers, inclusifs·ves et autres personnes fucking bienveillant·e·s</li>
                            <li>Sortie prévue pour la rentrée 2020</li>
                        </ul>
                    </div>
                    <div id="video-container">
                        <video controls>
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