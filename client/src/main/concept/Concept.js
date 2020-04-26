import React from 'react';
import { Link } from 'react-router-dom';
import { emitCurrentPath } from '../../utils/Utils';


import './Concept.css';
import community from '../../resources/img/icons/community.svg';
import weight from '../../resources/img/icons/weight.svg';
import geek from '../../resources/img/icons/geek.svg';
import stairs from '../../resources/img/icons/stairs.svg';

class Concept extends React.Component {

    componentDidMount() {
        // passes the location fo the app (current path) to the parent (App.js)
        emitCurrentPath(this.props);
    }

    render() {
        return (
            <div id="concept" className="animated">
                <h3>&Agrave; Electronic Tales, on veut rendre la computer culture <i>human readable</i>, c'est-à-dire accessible &agrave; tous&middot;tes.
                    Pour cela, on s'est assis&middot;e&middot;s, <span className="strike">on a mang&eacute; des tartines au beurre demi-sel,</span> on a r&eacute;flechi et on a d&eacute;fini quatre axes&nbsp;:</h3>
                <div id="goals-container">
                    <img src={community}
                        alt="" />
                    <p>Fabriquer un safe-space d'entraide et de bienveillance
                        entre devs juniors</p>
                    <img src={weight}
                        alt="" />
                    <p>Aider les devs juniors à muscler leurs savoirs en software et&nbsp;hardware</p>
                    <img src={geek}
                        alt="" />
                    <p>Analyser et décrypter les codes de la culture geek</p>
                    <img src={stairs}
                        alt="" />
                    <p>Motiver les devs juniors à continuer à apprendre en parallèle de leur
                        job</p>

                </div>
                <div id="concept-button-wrap" to="/tracks">
                    <button id="concept-button" className="button-design">
                        <Link to="/tracks">
                            Super&nbsp;! Et concrètement&nbsp;?
                        </Link>
                    </button>
                </div>
            </div>
        )
    }
}

export default Concept;