import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searchBar.scss";

const SearchBar = ({}) => {
  const navigate = useNavigate();

  // useState for search destination
  const [destinationData, setDestinationData] = useState({});
  const [searchText, setSearchText] = useState("");

  // const responsive = window.screen.width;

  const SearchDestination = async (e) => {
    e.preventDefault();

    console.log(searchText);
    // Function for search the destination
    try {
      const res = await axios.get(
        `http://localhost:3002/api/destinations/search?search=${searchText}`
      );
      setDestinationData(res);
      if (res.data.length === 1) {
        navigate("destinations/" + res.data[0].id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={SearchDestination} method="POST">
        <input
          type="text"
          placeholder="Rechercher une destination..."
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
