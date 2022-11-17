import "./header.css"
import React from 'react'

export default function Header() {
  return (
    <div className="header">
        <div id="div_list">
        <h2>Add Classes</h2>
        <input type="text" name="item" id="usrInput"/>
        <button id="addBtn" class="btn">add</button>
    </div>
    </div>
  )
}