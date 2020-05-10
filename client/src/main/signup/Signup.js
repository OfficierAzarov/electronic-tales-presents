import React from "react";
import { emitCurrentPath } from "../../utils/Utils";
import Subscribe from "../../elements/form/subscribe/Subscribe.js";

import "./Signup.css";

import grateful from "../../resources/img/grateful.gif";

class Signup extends React.Component {
  state = {
    status: "",
    message: "",
    isEmailSubmitted: false,
    subscriptionError: "",
  };

  componentDidMount() {
    // passes the location from the app (current path) to the parent (App.js)
    emitCurrentPath(this.props);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  configureNotification = ({ status, msg }) => {
    this.setState({ status: status, message: msg });
    this.setState({ isEmailSubmitted: true });
  };

  handleError = ({ status, msg }) => {
    this.setState({ status: status, message: msg });
    this.setState({ isEmailSubmitted: true });
  };

  render() {
    return (
      <div id="signup" className="animated">
        <div className="h-container">
          <h2>Comment nous aider&nbsp;?</h2>
        </div>
        <div id="steps-container">
          <div id="step-1">
            <p>&Eacute;cris ton email là.</p>
            {this.state.isEmailSubmitted && this.state.status !== "200" ? (
              <div className="notification failure">
                <p>{this.state.message}</p>
              </div>
            ) : (
              <div></div>
            )}
            {this.state.isEmailSubmitted && this.state.status === "200" ? (
              <div className="notification success">
                <p>{this.state.message}</p>
              </div>
            ) : (
              <div id="input-container">
                <Subscribe
                  configureNotification={this.configureNotification}
                  handleError={this.handleError}
                />
              </div>
            )}
          </div>

          {/* <div id="step-1">
                        <h4>1</h4>
                        <div id="text-and-arrow-container">
                            <p>&Eacute;cris ton email là.</p>
                            <div id="arrow-container">
                                <div id="arrow"></div>
                            </div>
                            <div id="arrow-down-container">
                                <i></i>
                            </div>
                        </div>
                        {(this.state.isEmailSubmitted && this.state.status !== '200')?
                            <div className="notification failure">
                                <p>{this.state.message}</p>
                            </div>
                            : <div></div>
                        }
                        {(this.state.isEmailSubmitted && this.state.status==='200') ?
                            <div className="notification success">
                                <p>{this.state.message}</p>
                            </div>  
                            : <div id="mail-input-container">
                                <Subscribe 
                                    configureNotification={this.configureNotification}
                                    handleError={this.handleError}/>
                            </div>
                        }

                    </div>
                    <div className="regular-colums">
                        <h4>2</h4>
                        <p>Tu deviens un&middot;e membre à part enti&egrave;re du pool de co-cr&eacute;ateurs&middot;trices d'Electronic Tales... de l'&eacute;quipe, quoi&nbsp;!</p>
                    </div>
                    <div className="regular-colums">
                        <h4>3</h4>
                        <p>N'aie pas peur&nbsp;! En vrai, nous n'allons pas te demander de r&eacute;diger une s&eacute;rie d'articles bouleversants de profondeurs sur le z-index en css
                            ou de recoder <a href="https://www.impots.gouv.fr/portail/" target="_blank" rel="noopener noreferrer">impots.gouv</a> en dark theme. <br /><br />
                            Tu vas voir, c'est tout simple&nbsp;!
                        </p>
                    </div>
                    <div id="step-4" className="regular-colums">
                        <h4>4</h4>
                        <p>&Agrave; intervalles r&eacute;guliers (mais pas trop rapproch&eacute;s),
                        nous t'&eacute;crirons pour te poser
                        des questions de la plus haute importance (ex&nbsp;: quel design
                        tu pr&eacute;f&egrave;res, quels sujets t'int&eacute;ressent...).
                        Y r&eacute;pondre ne te prendra jamais plus de 5&nbsp;minutes. Et si tu
                        n'es pas inspir&eacute;&middot;e, tu as le droit de nous &eacute;crire pour
                        dire que nos questions sont nulles (ou juste de ne pas r&eacute;pondre).
                        Bref, tes retours sont pr&eacute;cieux et bienvenus.
                        </p>
                    </div>
                    <div className="regular-colums">
                        <h4>5</h4>
                        <p>Tu as notre reconnaissance &eacute;ternelle.</p>
                        <img src={grateful}></img>
                        <p> Alors, pr&ecirc;t&middot;e pour l'aventure&nbsp;?<br /><br />
                            Si oui, retourne &agrave; l'&eacute;tape 1 et laisse-nous ton email&nbsp;!</p>
                    </div> */}
        </div>
      </div>
    );
  }
}

export default Signup;
