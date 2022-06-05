import React from "react";
import "./forum.scss";
import { Link } from "react-router-dom";
import data from "./data.json";

const Forum = () => {
  return (
    <div className="forum">
      <h1>Bienvenue sur notre Forum</h1>
      <h2>Echangez entre voyageurs </h2>

      {data.map((e) => {
        return (
          <div className="category">
            <div className="head-category">
              <h3>{e.category}</h3>
            </div>
            <div className="head-category-box">
              {e.topics.map((topic) => (
                <Link to={`/forum/${e.link}/${topic.slug}`}>
                  {topic.description}
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Forum;
