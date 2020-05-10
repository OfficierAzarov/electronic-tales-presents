import React from "react";

import * as Utils from "../../../utils/Utils";

import modernWorld from "../../../resources/img/modern-world-animation-pretty-ok.gif";
import ancientWorld from "../../../resources/img/ancient-world-animation-pretty-ok.gif";
import imaginarium from "../../../resources/img/imaginarium-animation.gif";

import "./TracksTabs.css";

class TracksTabs extends React.Component {
  state = {
    isShown: false,
    isTranslated: false,
    isActive: ["modern-world"],
  };

  componentDidUpdate(prevProps) {
    if (this.props.isShown !== prevProps.isShown) {
      this.setState({ isShown: this.props.isShown });
    }
    if (this.props.isTranslated !== prevProps.isTranslated) {
      this.setState({ isTranslated: this.props.isTranslated });
    }
  }

  worlds = [
    {
      id: "modern-world",
      title: "Modern World",
      desc:
        "Débugue.<br/> Apprends à lire le code des autres. Automatise. Survis aux entretiens. Écris du code propre. Croque des chips sans mettre de miettes sur ton clavier.",
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

  show = (worldId) => {
    this.setState({ isActive: [worldId] });
  };

  shouldIShow = (worldId) => {
    return this.state.isActive.includes(worldId) ? true : false;
  };

  render() {
    return (
      <div
        id="worlds-container"
        style={{
          opacity: this.state.isShown ? 1 : 0,
          transform: this.state.isTranslated ? "translateY(-8%)" : "",
        }}
      >
        <div id="world">
          <div>
            <div id="tabs">
              {this.worlds.map((world) => (
                <div
                  id={world.id}
                  key={world.id}
                  className="tab-title"
                  onClick={() => this.show(world.id)}
                  style={{
                    textShadow: this.shouldIShow(world.id)
                      ? "0 0 0.4em rgb(0, 225, 255), 0 0 0.8em rgb(0, 225, 255), 0 0 1.6em rgb(0, 255, 255)"
                      : "none",
                  }}
                >
                  {world.title}
                </div>
              ))}
            </div>
          </div>

          {this.worlds.map((world) => (
            <div>
              <div
                className="content-container"
                id={world.id}
                key={world.id}
                style={{
                  display: this.shouldIShow(world.id) ? "" : "none",
                }}
              >
                <img src={world.imgSrc} alt={world.alt} />
                <div className="text-container">
                  <p
                    dangerouslySetInnerHTML={Utils.convertToCleanHtml(
                      world.desc
                    )}
                  ></p>
                  <p>{world.baseline}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TracksTabs;
