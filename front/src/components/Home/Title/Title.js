import React from "react";
import { Link } from "react-router-dom";
import "./title.scss";

export const Title = () => {
  return (
    <div className="tilte">
      <Link to="/">
        <h1 className="title--journey">My Journey</h1>
        <h2 className="title--journey--subtitle">Find Your Way</h2>
      </Link>
    </div>
  );
};
