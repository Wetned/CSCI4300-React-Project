import React, { useState } from 'react';
import "./topbar.css"
import Popup from "../Popup/Popup"

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
    <div className='top' id='header_bar'>
        <div className="topLeft">
            <h2 id="app_name">classSearch</h2>
        </div>
        <div className="topCenter" id="login_form" >
            <i class="fa-solid fa-user"></i>
            <input type="text" name="item" id="username" placeholder="username"/>
            <i class="fa-solid fa-key"></i>
            <input type="text" name="item" id="password" placeholder="************"/>
            <button id="login" class="btn" onsubmit="loggedIn();">login</button>
        </div>
        <div className="topRight">
            <div>
             <input type="button" value="Sign Up" class="btn" id="signup" onClick={togglePopup}/>
             {isOpen && <Popup content={<>
              <b>Create New User</b><br/>
              <br/>
              <div>
                <label for="name">name:</label><br/>
                <input type="text" name="name" id="name" class="text"></input><br/>
              </div>
              <div>
                <label for="email">email:</label><br/>
                <input type="text" name="email" id="email" value="" class="text"></input><br/>
              </div>
              <div>
                <label for="password">password:</label><br/>
                <input type="password" name="password" id="password" value="" class="text"></input><br/>
              </div>
              <br/>
              <button>Submit</button>
             </>}
             handleClose={togglePopup}
            />}
            </div>
        </div>
    </div>
    </>
  )
}

