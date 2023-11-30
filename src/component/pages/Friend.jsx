import React from 'react';
import {Box} from '@mui/material';
import Sidenav from '../Sidenav';
import Navbar from '../Navbar';
import FriendRequest from './Friend/FriendRequest.jsx';
import FriendSuggestion from './Friend/FriendSuggestion.jsx';
import './Friend/Friend.css'
import friendRequest from './Friend/friendRequest.js';
import friendSuggestion from './Friend/friendSuggestion.js';

const Friend = () => {
  return (
    <>
        <Navbar/>
        <Box height={70} backgroundColor="var(--backGroundColor)"></Box>
        <Box sx={{display:'flex', minHeight:"100vh", backgroundColor:"var(--backGroundColor)"}}>
          <Sidenav/>
          <Box component="main" sx={{flexGrow:1,p:1}}>  
             <div className="friend-main">
                <div className="friend-suggestion-box">
                  <div className="friend-suggestion-filter">
                    <h2>Friend Suggestion</h2>
                    <h5>Filter</h5>
                  </div>
                  <div className="friend-suggestion">
                    {friendSuggestion.map((data)=>{
                      return <FriendSuggestion {...data}/>
                    })}
                  </div>
                </div>
                <div className="friend-request-box">
                  <h2>Friend Request</h2>
                  <div className="friend-request">
                    {friendRequest.map((data)=>{
                      return <FriendRequest {...data}/>
                    })}
                      
                  </div>
                </div>
             </div>
          </Box>
        </Box>
        
    </>
  )
}

export default Friend