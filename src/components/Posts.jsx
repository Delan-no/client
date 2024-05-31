import React, { useState } from "react";

import ImgBlog1 from "../images/blog1.png";
import ImgBlog2 from "../images/blog2.png";
import ImgBlog3 from "../images/blog3.png";
import ImgBlog4 from "../images/blog4.png";
import ImgBlog5 from "../images/blog5.png";
import PostItem from "./PostItem";

const POSTS = [
  {
    id: "1",
    imgblog: ImgBlog1,
    category: "education",
    title: "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit.",
    description:
      "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis suscipit accusantium animi harum deleniti esse beatae perspiciatis ipsum dolorem cumque.",
    authorID: 3,
  },
  {
    id: "2",
    imgblog: ImgBlog2,
    category: "education",
    title: "Lorem ipsum dolor sit.",
    description:
      "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis suscipit accusantium animi harum deleniti esse beatae perspiciatis ipsum dolorem cumque.",
    authorID: 2,
  },
  {
    id: "3",
    imgblog: ImgBlog3,
    category: "education",
    title: "Lorem ipsum dolor sit.",
    description:
      "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis suscipit accusantium animi harum deleniti esse beatae perspiciatis ipsum dolorem cumque.",
    authorID: 4,
  },
  {
    id: "4",
    imgblog: ImgBlog4,
    category: "education",
    title: "Lorem ipsum dolor sit.",
    description:
      "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis suscipit accusantium animi harum deleniti esse beatae perspiciatis ipsum dolorem cumque.",
    authorID: 1,
  },
  {
    id: "5",
    imgblog: ImgBlog5,
    category: "education",
    title: "Lorem ipsum dolor sit.",
    description:
      "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis suscipit accusantium animi harum deleniti esse beatae perspiciatis ipsum dolorem cumque.",
    authorID: 5,
  },
  {
    id: "6",
    imgblog: ImgBlog5,
    category: "education",
    title: "Lorem ipsum dolor sit.",
    description:
      "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis suscipit accusantium animi harum deleniti esse beatae perspiciatis ipsum dolorem cumque.",
    authorID: 5,
  },
];

const Posts = () => {
  const [posts, setPosts] = useState(POSTS);
  return (
    <section className="mx-4">
      <div className="">
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
      </div>
    </section>
  );
};

export default Posts;
