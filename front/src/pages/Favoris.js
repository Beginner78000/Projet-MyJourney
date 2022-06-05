import React from "react";
import { Link } from "react-router-dom";
import "./favoris.scss";
const Home = (props) => {
  return (
    <div className='tab-content'>
      <div className='card--main'>
        <Link to={"/destinations/3/hotels"} >
          <span className='button--annecy'>
            <a href='/' className='a-test'></a>
          </span>
        </Link>
        <Link
          to={"/destinations/99/restaurants"}
          // className='card border-info mb-3'
        >
          <span className='button--Alaska'>
            <a href='/' className='a-test'></a>
          </span>
        </Link>
        <Link
          to={"/destinations/44/activities"}
          // className='card border-info mb-3'
        >
          <span className='button--Bergen'>
            <a href='/' className='a-test'></a>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
