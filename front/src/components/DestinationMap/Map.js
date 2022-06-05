import React, { useMemo } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const Map = ({ city }) => {
  const center = useMemo(
    () => ({ lat: parseFloat(city.latitude), lng: parseFloat(city.longitude) }),
    []
  );
  const responsive = window.screen.width;

  if (responsive < 450) {
    return (
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker position={center} />
      </GoogleMap>
    );
  } else {
    return (
      <GoogleMap
        zoom={13}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker position={center} />
      </GoogleMap>
    );
  }
};

export default Map;
