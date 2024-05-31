import React from 'react'
import { Link } from 'react-router-dom'
import Robot from '../images/robot.jpg'

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/delanno`}className='post__author'>
        <div className="">
            <img src={Robot} alt="" className='rounded-full h-8 w-8'/>
        </div>
        <div className="post__authors-details ">
            <h5>By: Délan</h5>
            <small>Just Now</small>
        </div>
    </Link>  )
}

export default PostAuthor