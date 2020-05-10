import React from "react";

import "./Map.css";

class Map extends React.Component {
  state = {
    isActive: [],
    isShown: false,
    isTranslated: false,
  };

  componentDidUpdate(prevProps) {
    if (this.props.isShown !== prevProps.isShown) {
      this.setState({ isShown: this.props.isShown });
    }
    if (this.props.isTranslated !== prevProps.isTranslated) {
      this.setState({ isTranslated: this.props.isTranslated });
    }
  }

  preHereStations = [
    {
      id: "station-1",
      title: "Idée 🤔",
      comment: "Tu crois vraiment que c'est une bonne idée ?",
    },
    {
      id: "station-2",
      title: "Brainstorrrrm",
      comment: "Il reste des Kinder Country ?",
    },
  ];

  postHereStations = [
    {
      id: "station-4",
      title: "Recueil de vos idées",
      comment: "On mouline, on analyse, on cogito ergo sum.",
    },
    {
      id: "station-5",
      title: "Release de la plateforme Electronic&nbsp;Tales 🎉",
      comment: "On dégomme le syndrome de l'imposteur ensemble.",
    },
    {
      id: "station-6",
      title: "Community life : workshops, cours du soir...",
      comment: "On continue à dégommer.",
    },
    {
      id: "station-7",
      title: "Paix sur la Terre 🌼",
      comment:
        "Ou juste un milieu tech plus gentil et plus inclusif, pour commencer.",
    },
  ];

  hoverEffectOn = (stationId) => {
    this.setState({ isActive: [stationId] });
  };

  hoverEffectOff = () => {
    this.setState({ isActive: [] });
  };

  shouldIShow = (stationId) => {
    return this.state.isActive.includes(stationId) ? true : false;
  };

  render() {
    return (
      <div
        id="map"
        style={{
          opacity: this.state.isShown ? 1 : 0,
          transform: this.state.isTranslated ? "translateY(-8%)" : "",
        }}
      >
        <div id="progress-container">
          <span id="progress-bar"></span>
          {this.preHereStations.map((station) => (
            <div key={station.id} className="station-container">
              <span
                className="station done"
                onMouseEnter={() => this.hoverEffectOn(station.id)}
                onMouseLeave={() => this.hoverEffectOff()}
              ></span>
              <div className="names-container">
                <p
                  style={{
                    fontWeight: this.shouldIShow(station.id) ? 600 : "",
                  }}
                >
                  {station.title}
                </p>
                <p
                  className="comment"
                  style={{
                    color: this.shouldIShow(station.id) ? "#e9e9e9" : "",
                  }}
                >
                  {station.comment}
                </p>
              </div>
            </div>
          ))}
          <div className="station-container">
            <div id="here-station-container">
              <i
                className="fas fa-long-arrow-alt-right"
                style={{
                  animationPlayState: this.shouldIShow("here-station")
                    ? "paused"
                    : "",
                }}
              ></i>
              <span
                className="station"
                id="here-station"
                onMouseEnter={() => this.hoverEffectOn("here-station")}
                onMouseLeave={() => this.hoverEffectOff()}
              ></span>
            </div>
            <div className="names-container">
              <p
                id="here-station-name"
                style={{
                  fontWeight: this.shouldIShow("here-station") ? 600 : "",
                  animationPlayState: this.shouldIShow("here-station")
                    ? "paused"
                    : "",
                }}
              >
                On parle de notre projet
              </p>
              <p
                className="comment"
                style={{
                  color: this.shouldIShow("here-station") ? "#e9e9e9" : "",
                }}
              >
                Vous êtes ici&nbsp;!
              </p>
            </div>
          </div>
          {this.postHereStations.map((station) => (
            <div key={station.id} className="station-container">
              <span
                className="station"
                onMouseEnter={() => this.hoverEffectOn(station.id)}
                onMouseLeave={() => this.hoverEffectOff()}
              ></span>
              <div className="names-container">
                <p
                  style={{
                    fontWeight: this.shouldIShow(station.id) ? 600 : "",
                  }}
                >
                  {station.title}
                </p>
                <p
                  className="comment"
                  style={{
                    color: this.shouldIShow(station.id) ? "#e9e9e9" : "",
                  }}
                >
                  {station.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Map;
