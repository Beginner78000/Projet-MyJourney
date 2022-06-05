import React from "react";
import "./forumTalks.scss";
import data from "./data.json";

const ForumTalks = () => {
  console.log(data[0].content[0]);
  return (
    <div className="forum-talks">
      <h1>
        Salon / <span>{data[0].category}</span> / <span>{data[0].subject}</span>
      </h1>
      {data[0].content.map((post) => {
        <div className="forum-talks-area">
          <div className="talks-area-all-posts">
            <div className="talks-area-post">
              <h3>{post.title}</h3>
              <p>{post.message}</p>
              <div className="area-post-author">
                <p>{post.date}</p>
                <p>{post.author}</p>
              </div>
            </div>
          </div>
        </div>;
      })}

      <div className="forum-send-message">
        <form action="" method="get" className="new-message">
          <textarea type="textarea" placeholder="Rediger un nouveau post..." />
          <button> Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default ForumTalks;
