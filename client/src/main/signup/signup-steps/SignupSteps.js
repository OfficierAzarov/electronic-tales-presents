import React, { Component } from "react";

import * as Utils from "../../../utils/Utils";

import "./SignupSteps.css";

import grateful from "../../../resources/img/grateful.gif";

class SignupSteps extends Component {
  state = {
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

  steps = [
    {
      id: "1",
      desc:
        "Tu deviens un&middot;e membre à part enti&egrave;re du pool de co-cr&eacute;ateurs&middot;trices d'Electronic&nbsp;Tales... de l'&eacute;quipe, quoi&nbsp;! Ce qui signifie que tu peux, si tu le souhaites, t'identitifer en tant que membre de la team sur <i class='fab fa-linkedin'></i>, <i class='fab fa-instagram'></i> et compagnie.",
    },
    {
      id: "2",
      desc:
        "N'aie pas peur&nbsp;!<br/><br/>En vrai, nous n'allons pas te demander de r&eacute;diger une s&eacute;rie d'articles bouleversants de profondeur sur le z-index en css ou de recoder <a href='https://www.impots.gouv.fr/portail/' target='_blank' rel='noopener noreferrer'>impots.gouv</a> en dark theme. <br /><br />Tu vas voir, c'est tout simple&nbsp;!",
    },
    {
      id: "3",
      desc:
        "&Agrave; intervalles r&eacute;guliers (mais pas trop rapproch&eacute;s), nous t'&eacute;crirons pour te poser des questions de la plus haute importance (ex&nbsp;: quel design tu pr&eacute;f&egrave;res, quels sujets t'int&eacute;ressent...). Y r&eacute;pondre ne te prendra jamais plus de 5&nbsp;minutes. Et si tu n'es pas inspir&eacute;&middot;e, tu as le droit de nous &eacute;crire pour dire que nos questions sont nulles (ou juste de ne pas r&eacute;pondre).",
    },
    {
      id: "4",
      desc: "Tu as notre reconnaissance &eacute;ternelle.",
    },
  ];

  render() {
    return (
      <div
        id="steps-container"
        style={{
          opacity: this.state.isShown ? 1 : 0,
          transform: this.state.isTranslated ? "translateY(-8%)" : "",
        }}
      >
        {this.steps.map((step) => (
          <div key="{step.id}" className="regular-steps">
            <h4 className="shine-bright">{step.id}</h4>
            <p
              dangerouslySetInnerHTML={Utils.convertToCleanHtml(step.desc)}
            ></p>
            {step.id == this.steps.length ? (
              <div>
                <img src={grateful} />
                <p>
                  Alors, pr&ecirc;t&middot;e pour l'aventure&nbsp;?
                  <br />
                  <br />
                  Si oui,{" "}
                  <span onClick={this.props.scrollUp}>
                    retourne &agrave; l'&eacute;tape 1
                  </span>{" "}
                  et laisse-nous ton email&nbsp;!
                </p>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    );
  }

  // <div className="regular-colums">
  //   <h4>5</h4>
  //   <p>Tu as notre reconnaissance &eacute;ternelle.</p>
  //   <img src={grateful}></img>
  //   <p>
  //     Alors, pr&ecirc;t&middot;e pour l'aventure&nbsp;?
  //     <br />
  //     <br />
  //     Si oui, retourne &agrave; l'&eacute;tape 1 et laisse-nous ton
  //     email&nbsp;!
  //   </p>
  // </div>{" "}
}

export default SignupSteps;
