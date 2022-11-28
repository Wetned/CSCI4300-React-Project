import React from 'react'
import "./post.css"
import Popup from "../Popup/Popup"
import appleBooks from "../apple_books.png"
import { useState } from 'react'; 

const Post = props => {

  const [style, setStyle] = useState("post");
  
  const deletePost = () => {  
    setStyle("postDelete");
    /*delete info from database function*/
  };

  const savePost = () => {
    /*save post function*/
  }

  const editPost = () => {
    /*get post function depending on user first, then save post??*/
  }

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
        <button onClick={savePost} id="saveBtn" class="post_button">save</button>
        <button onClick={editPost} id="editBtn" class="post_button">edit</button> 
        <button onClick={deletePost} id="deleteBtn" class="post_button">delete</button> 
        <div>
             <input type="button" value="more info" class="btn" id="details" onClick={togglePopup}/>
             {isOpen && <Popup content={<>
             <div>
              <h3>More Details:</h3>
              <p>Each class is unique, for more information on the class you have added, please click <a href="http://www.bulletin.uga.edu/">here</a>.</p>
             </div>
             </>}
             handleClose={togglePopup}
            />}
            </div>
      </div>
    </div>
  )
}

export default Post;
