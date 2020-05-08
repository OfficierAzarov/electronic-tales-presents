import React from "react";

import withDisplay from "../../elements/with-display/withDisplay";
import InteractiveHeader from "../../elements/interactive-header/InteractiveHeader";
import Button from "../../elements/buttons/Button";
import * as Utils from "../../utils/Utils";

import "./Tracks.css";

import modernWorld from "../../resources/img/modern-world-animation-pretty-ok.gif";
import ancientWorld from "../../resources/img/ancient-world-animation-pretty-ok.gif";
import imaginarium from "../../resources/img/imaginarium-animation.gif";

class Tracks extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  headerTexts = {
    big: "Notre (future) plateforme.",
    middle:
      "Notre &eacute;quipe est actuellement en train de concocter une plateforme, tout confort et vue sur mer, pour accueillir les devs juniors.",
    little: "Elle sera construite autour de trois tracks d'apprentissage.",
  };

  worlds = [
    {
      id: "modern-world",
      title: "Modern World",
      desc:
        "Débugue. Apprends &agrave; lire le code des autres. Automatise. Survis aux entretiens. Écris du code propre. Croque des chips sans mettre de miettes sur ton clavier.",
      baseline: "Apprends à programmer entre les lignes.",
      imgSrc: modernWorld,
      imgAlt: "modern world gif",
    },
    {
      id: "ancient-world",
      title: "Ancient World",
      desc:
        "Découvre comment fonctionne un ordinateur. Construis ta machine. Apprends à parler le hardware et à souder sans te brûler les doigts (ou en faisant trempette dans la Biafine).",
      baseline: "Plonge dans le monde englouti de la computer science.",
      imgSrc: ancientWorld,
      imgAlt: "ancient world gif",
    },
    {
      id: "imaginarium",
      title: "Imaginarium",
      desc:
        "42. Ada Lovelace. St-Isidore. Klingon. Easter eggs. Backdoors. Star\u00A0+\u00A0gate/trek/wars. 127.0.0.1. Marre de ne pas avoir la réf à la machine à café\u00A0?",
      baseline: "Imprègne-toi des mythes et légendes de la bits generation.",
      imgSrc: imaginarium,
      imgAlt: "imaginarium gif",
    },
  ];

  scrollDown = () => {
    // console.log(this.ref.current.offsetTop);
    // const topPos = this.ref.current.offsetTop;
    // window.scrollTo({ top: topPos, behavior: "smooth" });
    this.ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  render() {
    return (
      <div id="tracks">
        <InteractiveHeader
          bigText={Utils.convertToCleanHtml(this.headerTexts.big)}
          middleText={Utils.convertToCleanHtml(this.headerTexts.middle)}
          littleText={Utils.convertToCleanHtml(this.headerTexts.little)}
          isShown={this.props.isShown}
          isClickable={!this.props.isShown}
          scrollDown={this.scrollDown}
        />
        <div ref={this.ref} className="ref-wrapper">
          <div
            id="worlds-container"
            style={{
              opacity: this.props.isShown ? 1 : 0,
              transform: this.props.isTranslated ? "translateY(-8%)" : "",
            }}
          >
            {this.worlds.map((world) => (
              <div id={world.id} className="world animated" key={world.id}>
                <div className="world-text">
                  <h4 id="modern-world-header">{world.title}</h4>
                  <p>{world.desc}</p>
                  <p>{world.baseline}</p>
                </div>
                <img src={world.imgSrc} alt={world.alt} />
              </div>
            ))}
          </div>
        </div>
        <Button text="Et du coup, ça avance bien&nbsp;?" goto="/progress" />
      </div>
    );
  }
}

export default withDisplay(Tracks);
