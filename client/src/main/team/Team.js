import React from "react";
import { withTranslation } from "react-i18next";

import "./Team.css";

import handpoint from "../../resources/img/team/handpoint.png";
import monday from "../../resources/img/team/monday.png";
import crampon from "../../resources/img/team/crampon.png";
import partenko from "../../resources/img/team/partenko.png";
import azarov from "../../resources/img/team/azarov.png";

class Team extends React.Component {
  componentDidMount() {
    if (this.props.mobile !== "y") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  render() {
    const { t } = this.props;

    return (
      <div id="team-page">
        <h2>{t("team.title")}</h2>
        <div id="team-container">
          <div id="team-circle">
            <div className="member-circle deg0">
              <img className="team-pic" src={handpoint} alt="Oui, toi." />
            </div>
            <div className="team-member" id="member1">
              <div className="team-member-text">
                <h4 className="memberName">{t("team.id1.name")}</h4>
                <p>{t("team.id1.desc")}</p>
              </div>
            </div>
            <div className="member-circle deg72">
              <img className="team-pic" src={monday} alt="Monday" />
            </div>
            <div className="team-member" id="member2">
              <div className="team-member-text">
                <h4 className="memberName">{t("team.id2.name")}</h4>
                <p>{t("team.id2.desc")}</p>
              </div>
            </div>
            <div className="member-circle deg144">
              <img className="team-pic" src={crampon} alt="Le Crampon" />
            </div>
            <div className="team-member" id="member3">
              <div className="team-member-text">
                <h4 className="memberName">{t("team.id3.name")}</h4>
                <p>{t("team.id3.desc")}</p>
              </div>
            </div>
            <div className="member-circle deg216">
              <img className="team-pic" src={partenko} alt="Partenko" />
            </div>
            <div className="team-member" id="member4">
              <div className="team-member-text">
                <h4 className="memberName">{t("team.id4.name")}</h4>
                <p>{t("team.id4.desc")}</p>
              </div>
            </div>
            <div className="member-circle deg288">
              <img className="team-pic" src={azarov} alt="Officier Azarov" />
            </div>
            <div className="team-member" id="member5">
              <div className="team-member-text">
                <h4 className="memberName">{t("team.id5.name")}</h4>
                <p>{t("team.id5.desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Team);
