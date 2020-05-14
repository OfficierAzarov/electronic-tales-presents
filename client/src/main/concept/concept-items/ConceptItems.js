import React from "react";
import i18next from "i18next";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";


import withAPITranslation from "../../../elements/HOC/withAPITranslation";

import "./ConceptItems.css";

import community from "../../../resources/img/icons/community.svg";
import weight from "../../../resources/img/icons/weight.svg";
import geek from "../../../resources/img/icons/geek.svg";
import stairs from "../../../resources/img/icons/stairs.svg";

import communityMobile from "../../../resources/img/icons/community-mobile.svg";
import geekMobile from "../../../resources/img/icons/geek-mobile.svg";

import tea from "../../../resources/img/icons/tea.png";
import chat from "../../../resources/img/icons/chatcolor.png";
import learning from "../../../resources/img/icons/learning.png";
import gameboy from "../../../resources/img/icons/gameboy.png";

class ConceptItems extends React.Component {
  state = {
    isShown: false,
    isTranslated: false,
    shown: [],
    principles: [],
    implementations: [],
  };

  componentDidMount() {
    // passes the immplementation of generate method to i18next HOC
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
      principles: [
        {
          id: "safe-space",
          img: community,
          imgMobile: communityMobile,
          text: i18next.t("concept.conceptItems.principles.id1.text"),
          turnsOn: ["social"],
        },
        {
          id: "muscle",
          img: weight,
          imgMobile: weight,
          text: i18next.t("concept.conceptItems.principles.id2.text"),
          turnsOn: ["nightschool", "microlearning"],
        },
        {
          id: "culture",
          img: geek,
          imgMobile: geekMobile,
          text: i18next.t("concept.conceptItems.principles.id3.text"),
          turnsOn: ["coolcontent"],
        },
        {
          id: "level-up",
          img: stairs,
          imgMobile: stairs,
          text: i18next.t("concept.conceptItems.principles.id4.text"),
          turnsOn: ["nightschool", "social", "microlearning", "coolcontent"],
        },
      ],
    });
    this.setState({
      implementations: [
        {
          id: "nightschool",
          img: tea,
          text: i18next.t("concept.conceptItems.implementations.id1.text"),
        },
        {
          id: "social",
          img: chat,
          text: i18next.t("concept.conceptItems.implementations.id2.text"),
        },
        {
          id: "microlearning",
          img: learning,
          text: i18next.t("concept.conceptItems.implementations.id3.text"),
        },
        {
          id: "coolcontent",
          img: gameboy,
          text: i18next.t("concept.conceptItems.implementations.id4.text"),
        },
      ],
    });
  };

  hoverEffectOn = (item) => {
    this.setState({ shown: item.turnsOn });
  };

  hoverEffectOff = () => {
    this.setState({ shown: [] });
  };

  shouldIShow = (item) => {
    return this.state.shown.includes(item.id) ? true : false;
  };

  render() {
    if (this.props.mobile === "y") {
      return (
        <div id="how-items-container">
          <div id="principles">
            <h4 className="neon-flicker"><Slide bottom cascade>Nos principes</Slide></h4>
            <ul>
              {this.state.principles.map((item) => (
                <li
                  id={item.id}
                  key={item.id}
                  onMouseEnter={() => this.hoverEffectOn(item)}
                  onMouseLeave={() => this.hoverEffectOff()}
                >
                  <Bounce bottom><img src={item.imgMobile} /></Bounce>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div id="implementations">
            <h4 className="neon-flicker"><Slide bottom cascade>Notre toolbox</Slide></h4>
            <ul>
              {this.state.implementations.map((item) => (
                <li id={item.id} key={item.id}>
                  <Slide bottom duration={1000}><img src={item.img} /></Slide>
                  <Slide bottom duration={2000}><p>{item.text}</p></Slide>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div
          id="how-items-container"
          style={{
            opacity: this.state.isShown ? 1 : 0,
            transform: this.state.isTranslated ? "translateY(-8%)" : "",
          }}
        >
          <div id="principles">
            <ul>
              {this.state.principles.map((item) => (
                <li
                  id={item.id}
                  key={item.id}
                  onMouseEnter={() => this.hoverEffectOn(item)}
                  onMouseLeave={() => this.hoverEffectOff()}
                >
                  <img src={item.img} />
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div id="implementations">
            <ul>
              {this.state.implementations.map((item) => (
                <li
                  id={item.id}
                  key={item.id}
                  className={this.shouldIShow(item) ? "" : "off"}
                >
                  <img src={item.img} />
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default withAPITranslation(ConceptItems);
