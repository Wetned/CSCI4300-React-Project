import React from 'react'
import "./post.css"

const Post = props => {
  
  return (
    <div className="post">
      <img className="postImg" src="./apple_books.png" alt=""/>
      <div className="postContent">
        <form className="user_input">
          <label for="class">Class Name:</label><br/>
            <input type="text" placeholder="Ex: CSCI 1301"></input><br/>
          <label for="notes">Notes:</label><br/>
            <textarea id="notes" rows="10" placeholder="Personal notes"/><br/>
        </form>
        <button id="deleteBtn" class="btn">delete</button>
      </div>

    </div>
  )
}

export default Post;