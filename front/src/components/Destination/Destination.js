import React, { useEffect, useState } from "react";
import "./destination.scss";

import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";

import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Weather from "../Weather/Weather";
import DestinationMap from "../DestinationMap/DestinationMap";

const Destination = () => {
  const params = useParams();
  const [city, setCity] = useState([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3002/api/destinations/${params.id}`)
      .then((response) => {
        setCity(response.data);
        console.log(city);
      });
    /*eslint-disable-next-line */
  }, [params]);

  const divStyle = {
    backgroundImage: `url(http://localhost:3002/images/${city.destination_visual})`,
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "85%",
    height: "85vh",
    bgcolor: "background.paper",
    fontFamily: "Lora",
    boxShadow: 24,
    p: 0,
    borderRadius: "10px",
  };

  const responsiveStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "85%",
    height: "70vh",
    bgcolor: "background.paper",
    fontFamily: "Lora",
    boxShadow: 24,
    p: 0,
    borderRadius: "10px",
  };

  const responsive = window.screen.width;

  return (
    <div className="destination-background" style={divStyle}>
      <div className="destination">
        <h1>{city.city_name}</h1>
        <div className="destination-content">
          <p className="destination-resume">{city.history}</p>

          <div className="btns-destination">
            <button className="btn-destination" onClick={handleOpen}>
              CARTE
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              {responsive < 450 ? (
                <Box sx={responsiveStyle}>
                  <DestinationMap city={city} />
                </Box>
              ) : (
                <Box sx={style}>
                  <DestinationMap city={city} />
                </Box>
              )}
            </Modal>
            <Link
              to={`/destinations/${params.id}/activities`}
              className="btn-destination"
            >
              ACTIVITES
            </Link>
            <Link
              to={`/destinations/${params.id}/hotels`}
              className="btn-destination"
            >
              HOTELS
            </Link>
            <Link
              to={`/destinations/${params.id}/restaurants`}
              className="btn-destination"
            >
              RESTAURANTS
            </Link>
          </div>
          {responsive < 450 ? null : (
            <Weather lat={city.latitude} lon={city.longitude} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Destination;
