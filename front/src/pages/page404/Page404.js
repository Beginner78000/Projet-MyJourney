import React from "react";
import { Link } from "react-router-dom";
import "./page404.scss";
const Page404 = () => {
  return (
    <div className="notfound">
      <div className="notfound-text">
        <h4>404</h4>
        <h5>Page not found</h5>
      </div>
      <Link className="notfound-link" to={"/"}>
        Page d'accueil
      </Link>
    </div>
  );
};

export default Page404;
