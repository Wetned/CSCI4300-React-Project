import React from 'react';
import './App.css';
import TopBar from './topbar/TopBar';
import Posts from './posts/Posts';

// import { Switch, BrowserRouter, Route } from 'react-router-dom'
// import { Login } from "./components/login"

function App() {

  // <BrowserRouter>
  //   <Switch>
  //       <Route component={Login} exact path="/login"/>
  //   </Switch>
  // </BrowserRouter>

  return (
    <>
    <TopBar/>
    <Posts/>
    </>
  );
}

export default App;
