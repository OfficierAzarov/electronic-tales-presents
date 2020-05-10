import React from "react";

import Button from "../../elements/buttons/Button";
import { emitCurrentPath } from "../../utils/Utils";

import "./Presentation.css";

class Presentation extends React.Component {
  state = {
    largeText: false,
  };

  sentences = [
    "Te sentir légitime dans le monde de la tech ?",
    "Évaluer ton niveau réel ?",
    "Exprimer tes insécurités au travail ?",
    "Te motiver pour continuer à monter en compétences ?",
  ];

  componentDidMount() {
    // passes the location fo the app (current path) to the parent (App.js)
    emitCurrentPath(this.props);

    if (window.innerHeight < 700) {
      this.setState({ largeText: true });
    }
  }

  render() {
    return (
      <div id="presentation">
        <div
          className="h-container"
          style={{ marginTop: this.state.largeText ? "3%" : "" }}
        >
          <h2 style={{ width: this.state.largeText ? "90%" : "" }}>
            Développeur·euse junior, il t'est déjà arrivé d'avoir des
            difficultés pour...
          </h2>
        </div>
        <ul>
          {this.sentences.map((sentence, i) => (
            <li key={i}>{sentence}</li>
          ))}
        </ul>
        <div id="animation-wrapper">
          <Button text="Grumpf, oui&nbsp;!" goto="/why" />
        </div>
      </div>
    );
  }
}

export default Presentation;
