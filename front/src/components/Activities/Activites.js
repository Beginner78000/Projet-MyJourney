import React, { useEffect, useState } from "react";
import "./activities.scss";
import { useParams, Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { CircularProgress } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import axios from "axios";

const Activites = () => {
  const params = useParams();
  const [activities, setActivities] = useState([]);
  const [cityName, setCityName] = useState({});
  const [isLoading, setisLoading] = useState(true);

  const style = {
    marginTop: "10rem",
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3002/api/destinations/${params.id}/activities`)
      .then((response) => {
        setActivities(response.data);
        setisLoading(false);
      });
    /*eslint-disable-next-line */
  }, [params]);

  useEffect(() => {
    axios
      .get(`http://localhost:3002/api/destinations/${params.id}`)
      .then((response) => {
        setCityName(response.data);
      });
    /*eslint-disable-next-line */
  }, [params]);

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "red",
    },
  });

  const responsive = window.screen.width;

  return (
    <div className="activities">
      {responsive < 450 ? (
        <div className="activities-header">
          <Link className="header-link-arrow" to={`/destinations/${params.id}`}>
            <ArrowBackIcon /> { cityName.city_name }
          </Link>

          <div className="links">
            <Link
              className="header-link"
              to={`/destinations/${params.id}/hotels`}
            >
              Hôtels
            </Link>
            <Link
              className="header-link"
              to={`/destinations/${params.id}/restaurants`}
            >
              Restaurants
            </Link>{" "}
            <h1>Les activités à {cityName.city_name}</h1>
          </div>
        </div>
      ) : (
        <div className="activities-header">
          <Link className="header-link-arrow" to={`/destinations/${params.id}`}>
            <ArrowBackIcon /> {cityName.city_name}
          </Link>
          <h1>Les activités à {cityName.city_name}</h1>
          <div className="links">
            <Link
              className="header-link"
              to={`/destinations/${params.id}/hotels`}
            >
              Hôtels
            </Link>
            <Link
              className="header-link"
              to={`/destinations/${params.id}/restaurants`}
            >
              Restaurants
            </Link>
          </div>
        </div>
      )}

      <div className="all-activities">
        {!isLoading ? (
          activities.map((activity) => (
            <div key={activity.id} className="activity">
              <div className="activity-rate">
                {" "}
                <Rating
                  value={activity.rating}
                  readOnly
                  precision={0.1}
                  size="large"
                />
                <StyledRating
                  size="large"
                  max={1}
                  icon={<FavoriteIcon fontSize="inherit" />}
                  emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                />
              </div>
              <p className="activity-name">{activity.name}</p>{" "}
              <img
                className="activity-img"
                src={activity.pictures[0]}
                alt="pic"
              />
              <p className="activity-desc">{activity.shortDescription}</p>
              <p className="activity-price"> Prix : {activity.price.amount}€</p>
              <a
                target="_blank"
                rel="noreferrer"
                className="activity-link"
                href={activity.bookingLink}
              >
                Plus d'infos
              </a>
            </div>
          ))
        ) : (
          <CircularProgress style={style} size="10rem" />
        )}
      </div>
    </div>
  );
};

export default Activites;
