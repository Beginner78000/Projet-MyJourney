import React from "react";
import "./header.scss";
import { Title } from "../Title/Title";

const Header = ({}) => {
  return (
    <div className="header">
      <div className="header--title">
        <Title />
      </div>
    </div>
  );
};

export default Header;
