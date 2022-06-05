import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import "./quizResults.scss";

import * as React from "react";

const CONTINENT_URL = `/continents`

const Continent = () => {
    const params = useParams();
    const [continent, setContinent] = useState([]);
  
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    useEffect(() => {
      axios
        .get(CONTINENT_URL)
        .then((response) => {
          setContinent(response.data);
          console.log(continent);
        });
      /*eslint-disable-next-line */
    }, [params]);
  
};

export default Continent;