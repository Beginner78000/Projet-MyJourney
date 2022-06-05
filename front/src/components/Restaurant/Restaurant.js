import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./restaurant.scss";

import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import { lightGreen, red } from "@mui/material/colors";
import { CircularProgress } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const openColor = lightGreen.A700;
const closeColor = red.A700;

const Restaurant = () => {
  const params = useParams();
  const [restaurant, setRestaurant] = useState([]);
  const [cityName, setCityName] = useState({});
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3002/api/destinations/${params.id}/restaurants`)
      .then((response) => {
        setRestaurant(response.data);
        setisLoading(false);
      });
    /*eslint-disable-next-line */
  }, [params]);

  useEffect(() => {
    axios
      .get(`/destinations/${params.id}`)
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

  const style = {
    marginTop: "10rem",
  };

  const responsive = window.screen.width;

  return (
    <div className="restaurant">
      {responsive < 450 ? (
        <div className="restaurant-header">
          <Link className="header-link-arrow" to={`/destinations/${params.id}`}>
            <ArrowBackIcon /> {cityName.city_name}
          </Link>
          <div className="links">
            <Link
              className="header-link"
              to={`/destinations/${params.id}/activities`}
            >
              Activités
            </Link>
            <Link
              className="header-link"
              to={`/destinations/${params.id}/hotels`}
            >
              Hotels
            </Link>
            <h1>Les restaurants à {cityName.city_name}</h1>
          </div>
        </div>
      ) : (
        <div className="restaurant-header">
          <Link className="header-link-arrow" to={`/destinations/${params.id}`}>
            <ArrowBackIcon /> {cityName.city_name}
          </Link>
          <h1>Les restaurants à {cityName.city_name}</h1>
          <div className="links">
            <Link
              className="header-link"
              to={`/destinations/${params.id}/activities`}
            >
              Activités
            </Link>
            <Link
              className="header-link"
              to={`/destinations/${params.id}/hotels`}
            >
              Hotels
            </Link>
          </div>
        </div>
      )}

      <div className="all-restaurants">
        {!isLoading ? (
          restaurant.map((resto) => {
            if (resto.name) {
              return (
                <div key={resto.location_id} className="one-restaurant">
                  <div className="activity-rate">
                    <Rating
                      value={parseInt(resto.rating)}
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
                  <h3 className="resto-title">{resto.name}</h3>
                  <img
                    src={
                      resto.photo
                        ? resto.photo.images.medium.url
                        : "https://media-cdn.tripadvisor.com/media/photo-s/12/47/f3/8c/oko-restaurant.jpg"
                    }
                    alt={`visuel du restaurant ${resto.name}`}
                    className="resto-img"
                  />
                  <div className="resto-address">
                    <p>{resto.address_obj.street1}</p>
                    <div className="resto-address-postcode"></div>
                    <p>
                      {resto.address_obj.postalcode} {resto.address_obj.city}
                    </p>
                    <div className="resto-contact">
                      <p className="resto-phone">{resto.phone} </p>
                      {resto.open_now_text === "Closed Now" ? (
                        <div className="close">
                          <CircleRoundedIcon
                            sx={{ color: closeColor }}
                            fontSize="small"
                          />
                          <p className="close-text"></p>
                        </div>
                      ) : (
                        <div className="open">
                          <CircleRoundedIcon
                            sx={{ color: openColor }}
                            fontSize="small"
                          />
                          <p className="open-text"></p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="resto-cook">
                    <h4> Spécialités :</h4>
                    <div className="all-cooks">
                      {resto.cuisine[0] ? (
                        resto.cuisine.map((spe) => (
                          <div key={resto.id} className="resto-cooks">
                            {" "}
                            {spe.name}
                          </div>
                        ))
                      ) : (
                        <div className="resto-cooks">Locales</div>
                      )}
                    </div>
                  </div>
                  <div className="resto-infos">
                    {resto.price_level ? (
                      <p className="resto-price">Prix : {resto.price_level} </p>
                    ) : (
                      <p className="resto-price">Prix : $$ </p>
                    )}

                    <a className="resto-link" href={resto.web_url}>
                      Plus d'infos
                    </a>
                  </div>
                </div>
              );
            }
          })
        ) : (
          <CircularProgress style={style} size="10rem" />
        )}
      </div>
    </div>
  );
};

export default Restaurant;
