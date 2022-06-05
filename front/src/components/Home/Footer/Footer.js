/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <Link
        to="/team"
        className="btn-flip"
        data-back="Notre équipe"
        data-front="Notre équipe"
      />
    </div>
  );
};

export default Footer;
