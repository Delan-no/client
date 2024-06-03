import React, { useState } from "react";

import Avatar1 from "../images/blog1.png";
import Avatar2 from "../images/blog2.png";
import Avatar3 from "../images/blog3.png";
import Avatar4 from "../images/blog4.png";
import Avatar5 from "../images/blog5.png";
import { Link } from "react-router-dom";

const authorsData = [
  { id: 1, avatar: Avatar1, name: "Délan", posts: 3 },
  { id: 2, avatar: Avatar2, name: "kotcho", posts: 5 },
  { id: 3, avatar: Avatar3, name: "Luc", posts: 0 },
  { id: 4, avatar: Avatar4, name: "Loniasse", posts: 2 },
  { id: 5, avatar: Avatar5, name: "Antoine", posts: 1 },
];

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData);
  return (
    <section>
      {authors.length > 0 ? <div>
        {
          authors.map(({id, avatar, name, posts}) => {
            return <Link key={id} to={`/posts/users/${id}`}>
              <div>
                <img className="w-[50%]" src={avatar} alt={`Image of ${name}`}  />
              </div>
              <div>
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          })
        }
        </div> : <h2>Pas d'auteurs</h2>}
    </section>
  );
};

export default Authors;
