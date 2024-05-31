import React, { useState } from "react";


import PostItem from "./PostItem";
import { POSTS } from "../data.js";

const Posts = () => {
  const [posts, setPosts] = useState(POSTS);
  return (
    <section className="mx-4">
      {posts.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
        {posts.map(
          ({ id, imgblog, category, title, description, authorID }) => (
            <PostItem
              key={id}
              postID={id}
              imgblog={imgblog}
              category={category}
              title={title}
              description={description}
              authorID={authorID}
            />
          )
        )}
      </div> : <h2 className="text-center">Pas de Blog </h2>}
    </section>
  );
};

export default Posts;
