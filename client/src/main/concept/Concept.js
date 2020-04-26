import React from 'react';
import { Link } from 'react-router-dom';
import { emitCurrentPath } from '../../utils/Utils';


import './Concept.css';
import community from '../../resources/img/icons/community.svg';
import weight from '../../resources/img/icons/weight.svg';
import geek from '../../resources/img/icons/geek.svg';
import stairs from '../../resources/img/icons/stairs.svg';

import tea from '../../resources/img/icons/tea.png';
import chat from '../../resources/img/icons/chatcolor.png';
import learning from '../../resources/img/icons/learning.png';
import gameboy from '../../resources/img/icons/gameboy.png';

class Concept extends React.Component {

    componentDidMount() {
        // passes the location fo the app (current path) to the parent (App.js)
        emitCurrentPath(this.props);
    }

    render() {
        return (
            <div id="concept" className="animated">
                <h2>&Agrave; Electronic Tales, on veut rendre la computer culture <i>human readable</i>, <br/>c'est-à-dire accessible &agrave; tous&middot;tes.</h2>
                <h3>Pour cela, on s'est assis&middot;e&middot;s, <span className="strike">on a mang&eacute; des tartines au beurre demi-sel,</span> on a r&eacute;flechi, on a d&eacute;fini des axes et ourdi des concepts.</h3>
                <div id="how-items-container">
                    <div id="principles">
                        <ul>
                            <li>
                                <img src={community} alt="" />
                                <p>Fabriquer un safe-space d'entraide et de bienveillance entre devs juniors</p>
                            </li>
                            <li>
                                <img src={weight} alt="" />
                                <p>Aider les devs juniors à muscler leurs savoirs en software et&nbsp;hardware</p>
                            </li>
                            <li>
                                <img src={geek} alt="" />
                                <p>Analyser et décrypter les codes de la culture geek</p>
                            </li>
                            <li>
                                <img src={stairs} alt="" />
                                <p>Motiver les devs juniors à continuer à apprendre en parallèle de leur
                        job</p>
                            </li>
                        </ul>
                    </div>
                    <div id="implementations">
                        <ul>
                            <li>
                                <img src={tea} alt="" />
                                <p>Cours du soir et workshops, en ligne et en vrai.</p>
                            </li>
                            <li>
                                <img src={chat} alt="" />
                                <p>Wall social/Discord/autre moyen de communiquer entre juniors de façon anonyme (you name it.)</p>
                            </li>
                            <li>
                                <img src={learning} alt="" />
                                <p>Micro-learning, exercices interactifs, sandbox - pour apprendre partout sans ZzzZ.</p>
                            </li>
                            <li>
                                <img src={gameboy} alt="" />
                                <p>Des contenus cool dans ta boîte mail, ton Insta ou ton Facebook (mais il paraît que c'est pour les vieux).</p>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div id="goals-container">
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

                </div> */}
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