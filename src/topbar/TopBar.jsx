import React from 'react'
import "./topbar.css"

export default function TopBar() {
  return (
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
            <button id="signUp" class="btn" onclick='signUp()'>Sign up</button>
        </div>
    </div>
  )
}

