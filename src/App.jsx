import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Profile from './component/pages/Profile.jsx'; 
import Testseries from './component/pages/Testseries.jsx';
import Home from './component/pages/Home.jsx'; 
import Group from './component/pages/Group.jsx'; 
import Friend from './component/pages/Friend.jsx';
import Notifications from './component/pages/Notifications.jsx';
import Setting from './component/pages/Setting.jsx';
import Login from './component/pages/Login.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/profile" exact element={<Profile/>}></Route>
        <Route path="/testseries" exact element={<Testseries/>}></Route>
        <Route path="/group" exact element={<Group/>}></Route>
        <Route path="/friend" exact element={<Friend/>}></Route>
        <Route path="/notifications" exact element={<Notifications/>}></Route>
        <Route path="/setting" exact element={<Setting/>}></Route>
        <Route path='/Login' exact element={<Login/>}></Route>
      </Routes>   
    </BrowserRouter>
    </>
  )
}

export default App
