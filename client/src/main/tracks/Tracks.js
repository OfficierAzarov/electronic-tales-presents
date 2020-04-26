import React from 'react';
import { Link } from 'react-router-dom';
import { emitCurrentPath } from '../../utils/Utils';


import './Tracks.css';
import modernWorld from '../../resources/img/modern-world-animation-pretty-ok.gif';
import ancientWorld from '../../resources/img/ancient-world-animation-pretty-ok.gif';
import imaginarium from '../../resources/img/imaginarium-animation.gif';

class Tracks extends React.Component {

    componentWillMount() {
        // passes the location fo the app (current path) to the parent (App.js)
        emitCurrentPath(this.props);
    }

    render() {

        return (
            <div id="tracks">
                <h3 class="animated">Notre &eacute;quipe est actuellement en train de concocter une coquette petite plateforme, tout confort et vue sur mer, pour accueillir les devs juniors. <br />
                    Elle sera construite autour de trois tracks d'apprentissage&nbsp;:</h3>
                <div id="worlds-container">
                    <div id="modern-world" class="world animated">
                        <h4>Modern World</h4>
                        <img src={modernWorld}
                            alt="" />
                        <p>
                            Débugue. Apprends &agrave; lire le code des autres. Automatise. Survis aux entretiens.
                            Écris du code propre. Croque des chips sans mettre de miettes sur ton clavier.</p>
                        <p>Apprends à programmer entre les lignes.</p>
                    </div>
                    <div id="ancient-world" class="world animated">
                        <h4>Ancient World</h4>
                        <img src={ancientWorld}
                            alt="" />
                        <p> Découvre comment fonctionne un ordinateur. Construis ta machine.
                        Apprends à parler le hardware et à souder sans te brûler les doigts (ou en faisant trempette dans la Biafine).</p>
                        <p>Plonge dans le monde englouti de la <i>computer science</i>.</p>
                    </div>
                    <div id="imaginarium" class="world animated">
                        <h4>Imaginarium</h4>
                        <img src={imaginarium}
                            alt="" />
                        <p>42. Ada Lovelace. St-Isidore. Klingon. Easter eggs. Backdoors. Star + gate/trek/wars. 127.0.0.1.
                        Marre de ne pas avoir la r&eacute;f &agrave; la machine &agrave; caf&eacute;&nbsp;?
                        </p>
                        <p> Imprègne-toi des mythes et légendes de la <i>bits</i> generation.</p>

                    </div>
                </div >
                <div id="tracks-button-wrap">
                    <button id="tracks-button" className="button-design">
                        <Link to="/signup">
                            Je veux vous aider, je participe&nbsp;!
                        </Link>
                    </button>
                </div>
            </div>
        );
    }

}

export default Tracks;
