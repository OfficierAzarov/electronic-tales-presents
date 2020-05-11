import React from "react";

import Button from "../../elements/buttons/Button";

import "./Team.css";

import handpoint from "../../resources/img/team/handpoint.png";
import monday from "../../resources/img/team/monday.png";
import crampon from "../../resources/img/team/crampon.png";
import partenko from "../../resources/img/team/partenko.png";
import azarov from "../../resources/img/team/azarov.png";

class Team extends React.Component {
  render() {
    return (
      <div id="team-page">
        <h2>La Team</h2>
        <div id="team-container">
          <div id="team-circle">
            <div className="member-circle deg0"><img className="team-pic" src={handpoint} alt="Oui, toi."/></div>
            <div className="team-member" id="member1">
              <div className="team-member-text">
                <h4 className="memberName">Toi</h4>
                <p>Mais oui, parfaitement.</p>
              </div>
            </div>
            <div className="member-circle deg72"><img className="team-pic" src={monday} alt="Monday"/></div>
            <div className="team-member" id="member2">
              <div className="team-member-text">
                <h4 className="memberName">Monday Hazard</h4>
                <p>Éleveuse de code since 2020</p>
              </div>
            </div>
            <div className="member-circle deg144"><img className="team-pic" src={crampon} alt="Le Crampon"/></div>
            <div className="team-member" id="member3">
              <div className="team-member-text">
                <h4 className="memberName">Le crampon</h4>
                <p>Si la start-up nation avait un visage, ce serait le sien.</p>
              </div>
            </div>
            <div className="member-circle deg216"><img className="team-pic" src={partenko} alt="Partenko"/></div>
            <div className="team-member" id="member4">
              <div className="team-member-text">
                <h4 className="memberName">Partenko</h4>
                <p>Notre indémontable caution hardware</p>
              </div>
            </div>
            <div className="member-circle deg288"><img className="team-pic" src={azarov} alt="Officier Azarov"/></div>
            <div className="team-member" id="member5">
              <div className="team-member-text">
                <h4 className="memberName">Officier Azarov</h4>
                <p>Architecte technique et spirituel d'Electronic Tales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
