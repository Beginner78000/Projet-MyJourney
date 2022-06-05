import { Link } from "react-router-dom";
import "./quizResults.scss";

import * as React from "react";

export default function QuizResults({ data }) {
  return (
    <div className="quiz-results">
      <div className="all-box">
        {data.map((dest) => (
          <div key={dest.id} className="box">
            <Link to={`/destinations/${dest.id}`}>
              <img
                src={`http://localhost:3002/images/${dest.destination_visual}`}
                alt={`visual of ${dest.city_name}`}
              />
              <p>{dest.city_name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
