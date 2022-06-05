import React from "react";
import { Link } from "react-router-dom";

const Avis = () => {
  return (
    <div className="card-container">
      <Link to={"/destinations/1"} className="card border-info mb-3">
        <div className="card-header">Paris</div>
        <div className="card-body">
          <p className="card-text">France</p>
        </div>
      </Link>
      <Link to={"/destinations/22"} className="card border-info mb-3">
        <div className="card-header">Rome</div>
        <div className="card-body">
          <p className="card-text">Italie</p>
        </div>
      </Link>
      <Link to={"/destinations/68"} className="card border-info mb-3">
        <div className="card-header">Nagoya</div>
        <div className="card-body">
          <p className="card-text">Japon</p>
        </div>
      </Link>
    </div>
  );
};

export default Avis;
