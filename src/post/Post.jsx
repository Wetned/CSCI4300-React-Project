import React from 'react'
import "./post.css"
import Popup from "../Popup/Popup"
import appleBooks from "../apple_books.png"
import { useState } from 'react'; 

const Post = props => {

  const [style, setStyle] = useState("post");
  
  const changeStyle = () => {  
    setStyle("postDelete");
  };

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={style}>
      <img className="postImg" src={appleBooks} alt=""/>
      <div className="postContent">
        <form className="user_input">
          <label for="class">Class Name:</label><br/>
            <input id= "className"type="text" class = "className" name="className" placeholder="Ex: CSCI 1301"></input>
            <br/>
          <label for="notes">Notes:</label><br/>
            <textarea id="notes" class="notes" rows="10" placeholder="Personal notes"/>
            <br/>
        </form>
        <button onClick={changeStyle} id="deleteBtn" class="btn">delete</button>
        <div>
             <input type="button" value="more info" class="btn" id="details" onClick={togglePopup}/>
             {isOpen && <Popup content={<>
             <h1>For more details, please click <a href="http://www.bulletin.uga.edu/">here</a>.</h1>
             </>}
             handleClose={togglePopup}
            />}
            </div>
      </div>
    </div>
  )
}

export default Post;
