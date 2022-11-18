import React from 'react'
import Post from '../post/Post'
import "./posts.css"

 const Posts = props => {
  return (
    <div className="posts">
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Posts;
