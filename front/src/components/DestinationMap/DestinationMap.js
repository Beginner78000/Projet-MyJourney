import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import { CircularProgress } from "@mui/material";

import "./destinationMap.scss";
import Map from "./Map";

const DestinationMap = ({ city }) => {
  const loaderStyle = {
    marginTop: "8rem",
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded)
    return (
      <div>
        <CircularProgress style={loaderStyle} size="10rem" />
      </div>
    );

  return <Map city={city} />;
};

export default DestinationMap;
