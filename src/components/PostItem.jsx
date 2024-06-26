import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from '../components/PostAuthor'

const PostItem = ({postID, category, title, description, authorID, imgblog}) => {
    const shorDescription = description.length > 140 ? description.substr(0, 140) + '...' : description; 
    const postTitle = title.length > 30 ? title.substr(0, 10) + '...' : title; 
  return (
    <article className="post">
        <div className="post__imgblog">
            <Link to={`/posts/${postID}`}><img src={imgblog} alt={title}/></Link>
        </div>

        <div className="post__content">
            <Link to={`/posts/${postID}`}>
                <h3>{postTitle}</h3>
            </Link>
            <p>{shorDescription}</p>
            <div className="post__footer">
                <PostAuthor />
                <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
            </div>
        </div>
    </article>
  )
}

export default PostItem