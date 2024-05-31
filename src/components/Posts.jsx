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
  {
    id: "7",
    imgblog: ImgBlog5,
    category: "santé",
    title: "Parlons de la santé.",
    description:
      "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis suscipit accusantium animi harum deleniti esse beatae perspiciatis ipsum dolorem cumque.",
    authorID: 6,
  },
  {
    id: "8",
    imgblog: ImgBlog5,
    category: "économie",
    title: "Lorem ipsum dolor économie.",
    description:
      "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis suscipit accusantium animi harum deleniti esse beatae perspiciatis ipsum dolorem cumque.",
    authorID: 5,
  },
  {
    id: "9",
    imgblog: ImgBlog5,
    category: "culture",
    title: "Lorem ipsum dolor culture.",
    description:
      "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis suscipit accusantium animi harum deleniti esse beatae perspiciatis ipsum dolorem cumque.",
    authorID: 10,
  },
  {
    id: "10",
    imgblog: ImgBlog5,
    category: "sociologie",
    title: "Lorem ipsum dolor sociologie.",
    description:
      "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis suscipit accusantium animi harum deleniti esse beatae perspiciatis ipsum dolorem cumque.",
    authorID: 9,
  },
];

const Posts = () => {
  const [posts, setPosts] = useState(POSTS);
  return (
    <section className="mx-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
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
