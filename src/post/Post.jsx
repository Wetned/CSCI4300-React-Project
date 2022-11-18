import React from 'react'
import "./post.css"
import appleBooks from "../apple_books.png"
import { useState } from 'react'; 

const Post = props => {

  const [style, setStyle] = useState("post");
  
  const changeStyle = () => {  
    setStyle("postDelete");
  };

  return (
    <div className={style}>
      <div classsName="flex-item">
        <img className="postImg" src={appleBooks} alt=""/>
        <div className="postContent">
          <form className="user_input">
            <label for="class">Class Name:</label><br/>
              <input id="className" type="text" placeholder="Ex: CSCI 1301"></input>
              <br/>
            <label for="notes">Notes:</label><br/>
              <textarea lassName="all_input" id="notes" rows="10" placeholder="Personal notes"/>
              <br/>
          </form>
          <button onClick={changeStyle} id="deleteBtn" class="btn">delete</button>
        </div>
      </div>
    </div>
  )
}

export default Post;
