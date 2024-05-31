import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import imgblog from "../images/blog4.png";

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={"/posts-werwer/edit"} className="btn sm primary">
              Edit
            </Link>
            <Link to={"/posts-werwer/delete"} className="btn sm primary">
              Edit
            </Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post-detail__imgblog">
          <img src={imgblog} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus,
          error! Repellat rerum quae, debitis dolore sed vitae quidem dolor ex
          pariatur dicta? Accusantium dicta cupiditate ex fugit suscipit maxime
          iusto?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus,
          error! Repellat rerum quae, debitis dolore sed vitae quidem dolor ex
          pariatur dicta? Accusantium dicta cupiditate ex fugit suscipit maxime
          iusto?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
          excepturi id officia est corrupti voluptates voluptatem cumque quam
          quia quae autem deleniti maiores eos, laudantium accusamus! Ad facere
          quos animi voluptates nobis repellendus? Numquam dolorem, quas impedit
          ipsa quaerat error commodi, exercitationem nulla, aliquam corporis
          fuga voluptates iste libero mollitia in vero? Rem sequi ab, ea
          cupiditate nihil excepturi. Quod, impedit. Ipsam voluptatibus cum eius
          illum sed nesciunt, inventore laborum voluptates debitis nemo maxime
          veritatis quo obcaecati sunt commodi necessitatibus, harum cupiditate
          laudantium, optio maiores quis repudiandae tempore repellendus non.
          Temporibus enim amet, quasi nobis earum suscipit incidunt voluptatibus
          illo eligendi fuga aut consectetur natus mollitia quod? Minus eos qui
          dolore.
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
