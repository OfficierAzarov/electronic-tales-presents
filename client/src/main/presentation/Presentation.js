import React from 'react';

import Button from '../../elements/buttons/Button';
import { emitCurrentPath } from '../../utils/Utils';

import './Presentation.css';

class Presentation extends React.Component {

    componentDidMount() {
        // passes the location fo the app (current path) to the parent (App.js)
        emitCurrentPath(this.props);
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
                    <li>
                        Te sentir légitime dans le monde de la tech&nbsp;?
              </li>
                    <li>&Eacute;valuer ton niveau r&eacute;el&nbsp;?</li>
                    <li>Exprimer tes insécurités au travail&nbsp;?</li>
                    <li>
                        Te motiver pour continuer à monter en
                        comp&eacute;tences&nbsp;?
              </li>
                </ul>
                <Button 
                    text="Grumpf, oui&nbsp;!"
                    goto="/why" />
            </div>
        );
    }

}

export default Presentation;
