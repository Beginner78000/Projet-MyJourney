import React from "react";
import { Link } from "react-router-dom";

import "./notFound.scss";

const NotFound = () => {
  return (
    <>
      <div className="pageColor">
        <div className="stars"></div>

        <div className="sun-moon">
            <div className="sun"></div>
            <div className="moon"></div>
        </div>

        <div id="js-hills" className="background hills"></div>
        <div id="js-country" className="background country"></div>
        <div id="js-foreground" className="background foreground"></div>

        <div className="error-content">
            Sorry, that page never returned
            <br></br>
            from a trip to the <a className="atacama-desert" href="https://go.sygic.com/travel/place?id=region:23655">Atacama desert</a>.
        </div>

        <Link className="button-home" to={"/"}>Go home</Link>

        <div className="code">
            <span>4</span>
            <span>0</span>
            <span>4</span>
        </div>
      </div>
    </>

  );
};
   

export default NotFound;
