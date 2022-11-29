import React from 'react'
import Post from '../post/Post'
import "./posts.css"
import { useState, useEffect } from 'react'

function GetData() {
  const [data, setData] = useState({})
  useEffect(() => {
  fetch("/posts")
  .then(res => res.json())
  .then(data => setData(data))
  }, [ ])
  return data;
    }

 const Posts = props => {

  const [components, setComponents] = useState([]); 
  
  function addComponent() { 
      setComponents([...components, <Post/>]);    
  } 
  
  return ( 
    
    <div className="posts">
      <div className="header">
        <div id="div_list">
        <h2>Add Classes</h2>
        <p>Once logged in/signed up, this website allows you to add posts below so you can keep notes of classes you are interested in.</p>
        {/* <input type="text" name="item" id="usrInput"/> */}
        <button onClick={addComponent} id="addBtn" class="loggedIn">add</button>
        </div>
    </div>
      {components.map((item, i) => ( <Post/> ))} 
      {GetData}
      
    </div> 
    
  ) 

}

export default Posts;
