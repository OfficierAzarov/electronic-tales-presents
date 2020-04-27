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

    state = {
        scroll: true,
        isShown: true,
        isTranslated: false,
        isRevealed: false,
        isNightSchoolOn: false,
        isSocialOn: false,
        isLearningOn: false,
        isCoolContentOn: false
    }

    componentDidMount() {
        // passes the location fo the app (current path) to the parent (App.js)
        emitCurrentPath(this.props);

        window.scrollTo({top: 0, behavior: 'smooth'});
        
        // enables fadeInUp effect for low- and medium-height screens
        if (window.innerHeight < 800) {
            this.setState({isShown: false});
            window.addEventListener('scroll', this.reveal);
        }

    }

    reveal = () => {
        if (this.state.scroll) {
            this.setState({isShown: true, isTranslated: true});
            this.setState({scroll: false});
        }
    }

    hoverEffectOn = (e) => {
        switch (e.target.getAttribute('id')) {
            case 'safe-space':
                this.setState({isSocialOn: true});
                break;
            case 'muscle':
                this.setState({isNightSchoolOn: true, isLearningOn: true});
                break;  
            case 'culture':
                this.setState({isCoolContentOn: true});
                break;    
            case 'level-up':
                this.setState(        
                    {
                        isNightSchoolOn: true,
                        isSocialOn: true,
                        isLearningOn: true,
                        isCoolContentOn: true
                    }
                );    
                break;
        }

    }

    hoverEffectOff = (e) => {
        this.setState({
            isNightSchoolOn: false,
            isSocialOn: false,
            isLearningOn: false,
            isCoolContentOn: false
        });
    }

    render() {
        return (
            <div id="concept" className="animated">
                <div id="h-container">
                    <h2>&Agrave; Electronic Tales, on veut rendre <br/>la computer culture <em>human readable</em>.</h2>
                    <h3>C'est-à-dire accessible &agrave; tous&middot;tes.</h3>
                    <h4>Pour cela, on s'est assis&middot;e&middot;s, <span className="strike">on a mang&eacute; des tartines au beurre demi-sel, </span> on a r&eacute;flechi, on a d&eacute;fini des axes (et ourdi des concepts).</h4>
                    <i className="fas fa-chevron-down" style={{opacity: !this.state.isShown ? 1 : 0}}></i>
                </div>
                <div id="how-items-container" 
                    style={{ 
                    opacity: this.state.isShown ? 1 : 0,
                    transform: this.state.isTranslated ? 'translateY(-8%)' : 'translateY(0)'}}>
                    <div id="principles">
                        <ul>
                            <li id="safe-space" 
                                onMouseEnter={this.hoverEffectOn}
                                onMouseLeave={this.hoverEffectOff}>
                                <img src={community} alt="" />
                                <p>Fabriquer un safe-space d'entraide et de bienveillance entre devs juniors</p>
                            </li>
                            <li id="muscle"
                                onMouseEnter={this.hoverEffectOn}
                                onMouseLeave={this.hoverEffectOff}>
                                <img src={weight} alt="" />
                                <p>Aider les devs juniors à muscler leurs savoirs en software et&nbsp;hardware</p>
                            </li>
                            <li id="culture"
                                onMouseEnter={this.hoverEffectOn}
                                onMouseLeave={this.hoverEffectOff}>
                                <img src={geek} alt="" />
                                <p>Analyser et décrypter les codes de la culture geek</p>
                            </li>
                            <li id="level-up"
                                onMouseEnter={this.hoverEffectOn}
                                onMouseLeave={this.hoverEffectOff}>
                                <img src={stairs} alt="" />
                                <p>Motiver les devs juniors à continuer à apprendre en parallèle de leur
                        job</p>
                            </li>
                        </ul>
                    </div>
                <div id="implementations">
                    <ul>
                        <li className={this.state.isNightSchoolOn? '':'off'}>
                            <img src={tea} alt="" />
                            <p>Cours du soir et workshops, en ligne et en vrai.</p>
                        </li>
                        <li className={this.state.isSocialOn? '':'off'}>
                            <img src={chat} alt="" />
                            <p>Wall social/Discord/autre moyen de communiquer entre juniors de façon anonyme (you name it.)</p>
                        </li>
                        <li className={this.state.isLearningOn? '':'off'}>
                            <img src={learning} alt="" />
                            <p>Micro-learning, exercices interactifs, sandbox - pour apprendre partout sans ZzzZ.</p>
                        </li>
                        <li className={this.state.isCoolContentOn? '':'off'}>
                            <img src={gameboy} alt="" />
                            <p>Des contenus cool dans ta boîte mail, ton Insta ou ton Facebook (mais il paraît que c'est pour les vieux).</p>
                        </li>
                    </ul>
                </div>
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