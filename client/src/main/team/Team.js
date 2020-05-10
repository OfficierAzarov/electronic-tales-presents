import React from "react";

import Button from "../../elements/buttons/Button";

import "./Team.css";

import handpoint from "../../resources/img/team/handpoint.png";

class Team extends React.Component {
  render() {
    return (
      <div id="team-page">
        <h2>La Team</h2>
        <div id="team-container">
          <div id="team-circle">
            <div className="member-circle deg0"><img src={handpoint} alt="Oui, toi."/></div>
            <div className="team-member" id="member1">
              <div className="team-member-text">
                <h4 className="memberName">Toi</h4>
                <p>Mais oui, parfaitement.</p>
              </div>
            </div>
            <div className="member-circle deg72"></div>
            <div className="team-member" id="member2">
              <div className="team-member-text">
                <h4 className="memberName">Claire Heude</h4>
                <p>Testeuse de solutions pédagogiques</p>
              </div>
            </div>
            <div className="member-circle deg144"></div>
            <div className="team-member" id="member3">
              <div className="team-member-text">
                <h4 className="memberName">Le crampon</h4>
                <p>Si la start-up nation avait un visage, ce serait le sien.</p>
              </div>
            </div>
            <div className="member-circle deg216"></div>
            <div className="team-member" id="member4">
              <div className="team-member-text">
                <h4 className="memberName">Partenko</h4>
                <p>Notre indémontable caution hardware</p>
              </div>
            </div>
            <div className="member-circle deg288"></div>
            <div className="team-member" id="member5">
              <div className="team-member-text">
                <h4 className="memberName">Elisabeth Fainstein</h4>
                <p>Un vrai dur.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
