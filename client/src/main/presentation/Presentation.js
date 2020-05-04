import React from 'react';

import Button from '../../elements/buttons/Button';
import { emitCurrentPath } from '../../utils/Utils';

import './Presentation.css';

class Presentation extends React.Component {

    sentences = ['Te sentir légitime dans le monde de la tech ?',
                'Évaluer ton niveau réel?',
                'Exprimer tes insécurités au travail ?',
                'Te motiver pour continuer à monter en compétences ?']

    componentDidMount() {
        // passes the location fo the app (current path) to the parent (App.js)
        emitCurrentPath(this.props);

        console.log(window.innerHeight);

    }

    render() {

        return (
            <div id="presentation">
                <div className="h-container">
                    <h2>
                        Développeur·euse junior, il t'est déjà arrivé d'avoir des
                        difficultés pour...
                    </h2>
                </div>
                <ul>
                    {this.sentences.map((sentence, i) => 
                        <li key={i}>{sentence}</li>)

                    }
                </ul>
                <div id="animation-wrapper">
                    <Button 
                        text="Grumpf, oui&nbsp;!"
                        goto="/why" />
                </div>
                
            </div>
        );
    }

}

export default Presentation;
