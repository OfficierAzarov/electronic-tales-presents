import React from 'react';

import './ConceptItems.css';

import community from '../../../resources/img/icons/community.svg';
import weight from '../../../resources/img/icons/weight.svg';
import geek from '../../../resources/img/icons/geek.svg';
import stairs from '../../../resources/img/icons/stairs.svg';

import tea from '../../../resources/img/icons/tea.png';
import chat from '../../../resources/img/icons/chatcolor.png';
import learning from '../../../resources/img/icons/learning.png';
import gameboy from '../../../resources/img/icons/gameboy.png';

class ConceptItems extends React.Component {

    state = {
        isShown: false,
        isTranslated: false,
        shown: []
    }

    componentDidUpdate(prevProps) {
        if (this.props.isShown !== prevProps.isShown) {
            this.setState({isShown: this.props.isShown});
        };
        if (this.props.isTranslated !== prevProps.isTranslated) {
            this.setState({isTranslated: this.props.isTranslated});
        };
    }

    principles = [
        {   
            id: "safe-space",
            img: community,
            text: "Fabriquer un safe-space d'entraide et de bienveillance entre devs juniors",
            turnsOn: ['social']
        },
        {   
            id: "muscle",
            img: weight,
            text: "Aider les devs juniors à muscler leurs savoirs en software et hardware",
            turnsOn: ['nightschool', 'microlearning']
        },
        {   
            id: "culture",
            img: geek,
            text: "Analyser et décrypter les codes de la culture geek",
            turnsOn: ['coolcontent']
        },
        {   
            id: "level-up",
            img: stairs,
            text: "Motiver les devs juniors à continuer à apprendre en parallèle de leur job",
            turnsOn: ['nightschool', 'social', 'microlearning', 'coolcontent']
        }
    ]


    implementations = [
        {   
            id: "nightschool",
            img: tea,
            text: "Cours du soir et workshops, en ligne et en vrai.",
        },
        {   
            id: "social",
            img: chat,
            text: "Wall social/Discord/autre moyen de communiquer entre juniors de façon anonyme (you name it.)",
        },
        {   
            id: "microlearning",
            img: learning,
            text: "Micro-learning, exercices interactifs, sandbox - pour apprendre partout sans ZzzZ."
        },
        {   
            id: "coolcontent",
            img: gameboy,
            text: "Des contenus cool dans ta boîte mail, ton Insta ou ton Facebook (mais il paraît que c'est pour les vieux)."
        }
    ]

    hoverEffectOn = (item) => {
        this.setState({shown: item.turnsOn});
    }

    hoverEffectOff = () => {
        this.setState({shown: []});
    }

    shouldIShow = (item) => {
        return this.state.shown.includes(item.id) ? true : false;
    }

    render() {
        return (
            <div id="how-items-container"
                style={{opacity: this.state.isShown ? 1 : 0,
                        transform: this.state.isTranslated ? "translateY(-8%)":""}}>
                <div id="principles">
                    <ul>
                        {this.principles.map(item => (
                            <li id={item.id}
                                key={item.id}
                                onMouseEnter={() => this.hoverEffectOn(item)}
                                onMouseLeave={() => this.hoverEffectOff()}>
                                    <img src={item.img} />
                                    <p>{item.text}</p>
                            </li>))}
                    </ul>
                </div>
                <div id="implementations">
                    <ul>
                        {this.implementations.map(item => (
                            <li id={item.id} 
                                key={item.id} 
                                className={this.shouldIShow(item) ? "":"off"}>
                                <img src={item.img}/>
                                <p>{item.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }

}

export default ConceptItems;