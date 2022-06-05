import React from "react";
import amir from "../../assets/images/amir.png";
import marie from "../../assets/images/marie.png";
import loic from "../../assets/images/loic.png";
import antho from "../../assets/images/anthony.png";

import "./team.scss";

const Team = () => {
  return (
    <div className="team">
      <h1> Voici l'équipe My Journey </h1>
      <div className="team-main">
        <div className="dev-back">
          <p className="dev-spe">Les membres de l'équipe BACK</p>
          <div className="devs">
            <div className="dev">
              <img src={marie} alt="dev avatar" />

              <h3 className="name">Marie</h3>
              <h3 className="role">
                PRODUCT OWNER <br /> LEAD DEV BACK
              </h3>
            </div>{" "}
            <div className="dev">
              <img src={loic} alt="dev avatar" />

              <h2 className="name">Loic</h2>
              <h3 className="role">
                GIT MASTER <br /> DEV BACK
              </h3>
            </div>
          </div>
        </div>
        <div className="dev-front">
          <p className="dev-spe"> Les membres de l'équipe FRONT</p>
          <div className="devs">
            <div className="dev">
              <img src={amir} alt="dev avatar" />

              <h2 className="name">Amir</h2>
              <h3 className="role">
                SCRUM MASTER <br /> LEAD DEV FRONT
              </h3>
            </div>
            <div className="dev">
              <img src={antho} alt="dev avatar" />

              <h2 className="name">Anthony</h2>
              <h3 className="role">LEAD DEV FRONT</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
