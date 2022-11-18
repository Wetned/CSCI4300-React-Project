import React, { useState } from 'react';
import './App.css';
import TopBar from './topbar/TopBar';
import Header from './header/Header';
import Posts from './posts/Posts';

function App() {

  return (
    <>
    <TopBar/>
    <Header/>
    <Posts/>
    </>
  );
}

export default App;
