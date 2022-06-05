import React from "react";
import { Link } from "react-router-dom";
import "./journey.scss";
const Journey = () => {
  return (
    <div className='tab-content'>
      <div className='card--main'>
        <Link to={"/destinations/1"} className='link-destination'>
          <span className='button--france'>
            <a href='/' className='a-test'></a>
          </span>
        </Link>
        <Link to={"/destinations/22"} className='link-destination'>
          <span className='button--italie'>
            <a href='/' className='a-test'></a>
          </span>
        </Link>
        <Link to={"/destinations/68"} className='link-destination'>
          <span className='button--japon'>
            <a href='/' className='a-test'></a>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Journey;
