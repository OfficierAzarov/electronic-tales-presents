import React from "react";
import i18next from "i18next";

import withAPITranslation from "../../../elements/HOC/withAPITranslation";
import * as Utils from "../../../utils/Utils";

import "./Map.css";

class Map extends React.Component {
  state = {
    isActive: [],
    isShown: false,
    isTranslated: false,
    preHereStations: [],
    postHereStations: [],
  };

  componentDidMount() {
    this.props.implementGenerate(this.generate);
  }

  componentDidUpdate(prevProps) {
    if (this.props.isShown !== prevProps.isShown) {
      this.setState({ isShown: this.props.isShown });
    }
    if (this.props.isTranslated !== prevProps.isTranslated) {
      this.setState({ isTranslated: this.props.isTranslated });
    }
  }

  generate = () => {
    this.setState({
      preHereStations: [
        {
          id: "station-1",
          title: i18next.t("progress.map.preHereStations.id1.title"),
          comment: i18next.t("progress.map.preHereStations.id1.comment"),
        },
        {
          id: "station-2",
          title: i18next.t("progress.map.preHereStations.id2.title"),
          comment: i18next.t("progress.map.preHereStations.id2.comment"),
        },
      ],
    });

    this.setState({
      postHereStations: [
        {
          id: "station-4",
          title: i18next.t("progress.map.postHereStations.id1.title"),
          comment: i18next.t("progress.map.postHereStations.id1.comment"),
        },
        {
          id: "station-5",
          title: i18next.t("progress.map.postHereStations.id2.title"),
          comment: i18next.t("progress.map.postHereStations.id2.comment"),
        },
        {
          id: "station-6",
          title: i18next.t("progress.map.postHereStations.id3.title"),
          comment: i18next.t("progress.map.postHereStations.id3.comment"),
        },
        {
          id: "station-7",
          title: i18next.t("progress.map.postHereStations.id4.title"),
          comment: i18next.t("progress.map.postHereStations.id4.comment"),
        },
      ],
    });
  };

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
    if (this.props.mobile === "y") {
      return (
        <div id="map">
          <div id="progress-container">
            <span id="progress-bar"></span>
            {this.state.preHereStations.map((station) => (
              <div key={station.id} className="station-container">
                <span className="station done"></span>
                <div className="names-container">
                  <p>{station.title}</p>
                  <p className="comment">{station.comment}</p>
                </div>
              </div>
            ))}
            <div className="station-container">
              <div id="here-station-container">
                <i className="fas fa-long-arrow-alt-right"></i>
                <span className="station" id="here-station"></span>
              </div>
              <div className="names-container">
                <p
                  id="here-station-name"
                  dangerouslySetInnerHTML={Utils.convertToCleanHtml(
                    i18next.t("progress.map.here.title")
                  )}
                ></p>
                <p
                  className="comment"
                  dangerouslySetInnerHTML={Utils.convertToCleanHtml(
                    i18next.t("progress.map.here.comment")
                  )}
                ></p>
              </div>
            </div>
            {this.state.postHereStations.map((station) => (
              <div key={station.id} className="station-container">
                <span className="station"></span>
                <div className="names-container">
                  <p>{station.title}</p>
                  <p className="comment">{station.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
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
            {this.state.preHereStations.map((station) => (
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
                  dangerouslySetInnerHTML={Utils.convertToCleanHtml(
                    i18next.t("progress.map.here.title")
                  )}
                ></p>
                <p
                  className="comment"
                  style={{
                    color: this.shouldIShow("here-station") ? "#e9e9e9" : "",
                  }}
                  dangerouslySetInnerHTML={Utils.convertToCleanHtml(
                    i18next.t("progress.map.here.comment")
                  )}
                ></p>
              </div>
            </div>
            {this.state.postHereStations.map((station) => (
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
}

export default withAPITranslation(Map);
