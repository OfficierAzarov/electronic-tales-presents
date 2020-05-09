import React from "react";

import Button from "../../elements/buttons/Button";

import "./Team.css";

class Team extends React.Component {
  render() {
    return (
      <div>
        <div class="backcolor container" id="circle-container">
          <div id="outer-circle">
            <div class="smol-circle deg0"></div>
            <div class="team-member" id="member1">
              <h4>Toi. Oui, toi.</h4>
              <p>Mais oui, parfaitement.</p>
            </div>
            <div class="smol-circle deg72"></div>
            <div class="team-member" id="member2">
              <h4>Claire Heude</h4>
              <p>Testeuse de solutions pédagogiques</p>
            </div>
            <div class="smol-circle deg144"></div>
            <div class="team-member" id="member3">
              <h4>Le crampon</h4>
              <p>Si la start-up nation avait un visage, ce serait le sien</p>
            </div>
            <div class="smol-circle deg216"></div>
            <div class="team-member" id="member4">
              <h4>Pauline Artemenko</h4>
              <p>Notre ravissante caution hardware</p>
            </div>
            <div class="smol-circle deg288"></div>
            <div class="team-member" id="member5">
              <h4>Elisabeth Fainstein</h4>
              <p>Un vrai dur.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
