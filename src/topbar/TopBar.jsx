import React, {useState } from 'react';
import "./topbar.css"
import Popup from "../Popup/Popup"

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
 
  function togglePopup() {
    setIsOpen(!isOpen);
  }

  const users = [
    { username: 'test', password: 'user' },
    { username: 'alan', password: 'secret' },
    { username: 'me', password: 'ow' }
  ];

  function createUser() {
    let inputUser = document.getElementById("createUser").value.toLowerCase();
    let inputPass = document.getElementById("createPass").value;
    let match = false;
    if (inputUser !== "" && inputPass !== ""){
    users.forEach(element => {
      if(element.username.toLowerCase() === inputUser){
        alert("User already exists")
        match = true;
      }      
    });
    if(!match){
      users.push({username: inputUser, password: inputPass});
      users.forEach(element => {
        // alert(element.username + " " + element.password)
      });
      //Add a way to close the popup here
      document.getElementById("login_form").classList.remove("topCenter");
      document.getElementById("login_form").classList.add("loggedIn");
      document.getElementById("signup").classList.remove("btn");
      document.getElementById("signup").classList.add("loggedIn");
      document.getElementById("logout").classList.remove("loggedIn");
      document.getElementById("logout").classList.add("btn");
      document.getElementById("addBtn").classList.add("btn");
      document.getElementById("addBtn").classList.remove("loggedIn");
      
      let classNames = document.querySelectorAll("#className");
        classNames.forEach(element => {
          element.readOnly = false;
        });
        let notes = document.querySelectorAll("#notes");
        notes.forEach(element => {
          element.readOnly = false;
        });
        let deleteBtns = document.querySelectorAll("#deleteBtn");
        deleteBtns.forEach(element => {
          element.classList.remove("loggedIn");
        });
        
        document.getElementById("addBtn").classList.add("btn");
        document.getElementById("addBtn").classList.remove("loggedIn");
    }
  }
  }

  const login = () => {
    let inputUser = document.getElementById("username").value.toLowerCase();
    let inputPass = document.getElementById("password").value;
    let match = false;
    if (inputUser !== "" && inputPass !== ""){
      users.forEach(element => {
        if(element.username.toLowerCase() === inputUser){
          if(element.password === inputPass){
            // alert("match")
            match = true;
          }
        }
      });
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
      if(!match){
        alert("Incorrect Username/Password")
      }else{
        alert(inputUser + " has been logged in")
        document.getElementById("login_form").classList.remove("topCenter");
        document.getElementById("login_form").classList.add("loggedIn");
        document.getElementById("signup").classList.remove("btn");
        document.getElementById("signup").classList.add("loggedIn");
        document.getElementById("logout").classList.remove("loggedIn");
        document.getElementById("logout").classList.add("btn");
        let classNames = document.querySelectorAll("#className");
        classNames.forEach(element => {
          element.readOnly = false;
        });
        let notes = document.querySelectorAll("#notes");
        notes.forEach(element => {
          element.readOnly = false;
        });
        document.getElementById("addBtn").classList.add("btn");
        document.getElementById("addBtn").classList.remove("loggedIn");
        let deleteBtns = document.querySelectorAll("#deleteBtn");
        deleteBtns.forEach(element => {
          element.classList.remove("loggedIn");
        });
      }
    }
  }
  const logout = () => {
    users.forEach(element => {
      // alert(element.username + " " + element.password)
    });
      document.getElementById("login_form").classList.add("topCenter");
        document.getElementById("login_form").classList.remove("loggedIn");
        document.getElementById("signup").classList.add("btn");
        document.getElementById("signup").classList.remove("loggedIn");
        document.getElementById("logout").classList.add("loggedIn");
        document.getElementById("logout").classList.remove("btn");
        let classNames = document.querySelectorAll("#className");
        classNames.forEach(element => {
          element.readOnly = true;
        });
        let notes = document.querySelectorAll("#notes");
        notes.forEach(element => {
          element.readOnly = true;
        });
        document.getElementById("addBtn").classList.remove("btn");
        document.getElementById("addBtn").classList.add("loggedIn");
 
        let deleteBtns = document.querySelectorAll("#deleteBtn");
        deleteBtns.forEach(element => {
          element.classList.add("loggedIn");
        });
  }


  return (
    <>
    <div className='top' id='header_bar'>
        <div className="topLeft">
            <h2 id="app_name">classSearch</h2>
        </div>
        {/* eslint-disable-next-line */}
        <form className="topCenter" id="login_form" action="javascript:void(0);">
            <i class="fa-solid fa-user"></i>
            <input type="text" name="item" id="username" placeholder="username" required/>
            <i class="fa-solid fa-key"></i>
            <input type="password" name="item" id="password" placeholder="************" required/>
            <button id="login" class="btn" onClick={login}>login</button>
        </form>

        <div className="topRight">
            <div>
             <button id="logout" class="loggedIn" onClick={logout}>logout</button> 
             <input type="button" value="Sign Up" class="btn" id="signup" onClick={togglePopup}/>
             {isOpen && <Popup content={<>
             {/* eslint-disable-next-line */}
             <form className = "signUp" action="javascript:void(0);">
              <b>Create New User</b><br/>
              <br/>
              <div>
                <label for="name">username:</label>
                <input type="text" name="name" id="createUser" class="text" required></input><br/>
                <br/>
              </div>
              {/* <div>
                <label for="email">email:</label>
                <input type="text" name="email" id="email" value="" class="text"></input><br/>
                <br/>
              </div> */}
              <div>
                <label for="password">password:</label>
                <input type="password" name="password" id="createPass" class="text" required></input><br/>
              </div>
              <br/>
              <button id="createUser" class="btn" onClick={event => {createUser(); togglePopup();}}>Submit</button>
              </form>
             </>}
             handleClose={togglePopup}
            />}
            </div>
        </div>
    </div>
    </>
  )
}