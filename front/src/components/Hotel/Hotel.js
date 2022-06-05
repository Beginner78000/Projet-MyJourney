import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./hotel.scss";

import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { CircularProgress } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


const Hotel = () => {
  const params = useParams();
  const [hotel, setHotel] = useState([]);
  const [cityName, setCityName] = useState({});
  const [isLoading, setisLoading] = useState(true);

  const style = {
    marginTop: "10rem",
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3002/api/destinations/${params.id}/hotels`)
      .then((response) => {
        setHotel(response.data);
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
    <div className="hotels">
      {responsive < 450 ? (
        <div className="hotel-header">
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
              to={`/destinations/${params.id}/restaurants`}
            >
              Restaurants
            </Link>
            <h1>Les hôtels à {cityName.city_name}</h1>
          </div>
        </div>
      ) : (
        <div className="hotel-header">
          <Link className="header-link-arrow" to={`/destinations/${params.id}`}>
            <ArrowBackIcon /> {cityName.city_name}
          </Link>
          <h1>Les hôtels à {cityName.city_name}</h1>
          <div className="links">
            <Link
              className="header-link"
              to={`/destinations/${params.id}/activities`}
            >
              Activités
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

      <div className="all-hotels">
        {!isLoading ? (
          hotel.map((oneHotel) => {
            if (oneHotel.name) {
              return (
                <div key={oneHotel.location_id} className="hotel">
                  <div className="hotel-rate">
                    <Rating
                      value={parseInt(oneHotel.rating)}
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
                  <h3 className="hotel-name">{oneHotel.name}</h3>
                  {oneHotel.photo ? (
                    <img
                      src={oneHotel.photo.images.medium.url}
                      alt={`visuel de l'hotel ${oneHotel.name}`}
                    />
                  ) : (
                    <img
                      src="https://assets.website-files.com/5faeb38cb5f86ba2c2288cd3/5faeb38cb5f86b34de288fbb_ezgif.com-gif-maker%20(81).jpg"
                      alt={`visuel de l'hotel ${oneHotel.name}`}
                    />
                  )}

                  <div className="hotel-info">
                    <p className="hotel-stars">
                      Etoiles :
                      <span>{parseInt(oneHotel.hotel_class).toFixed(0)}</span>
                      <Rating value={1} max={1} readOnly size="small" />
                    </p>
                    {oneHotel.price_level ? (
                      <div className="hotel-price">
                        Prix : {oneHotel.price_level}
                      </div>
                    ) : (
                      <div className="hotel-price">Prix : $$</div>
                    )}
                  </div>
                  <a
                    className="hotel-link"
                    href={`https://www.tripadvisor.fr/Hotel_Review-g${oneHotel.ranking_geo_id}-d${oneHotel.location_id}-Reviews.html`}
                  >
                    Plus d'infos
                  </a>
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

export default Hotel;
