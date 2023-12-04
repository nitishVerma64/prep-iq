import React from 'react';
import {Box} from '@mui/material';
import Sidenav from '../Sidenav';
import Navbar from '../Navbar';
import './Group/Group.css'
import AllGroups from './Group/AllGroups';
import JoinedGroup from './Group/JoinedGroup';
import {JoinedGroupData} from './Group/AllGroupData'

const Group = () => {
  return (
    <>
        <Navbar/>
        <Box height={70} backgroundColor="var(--backGroundColor)"></Box>
        <Box sx={{display:'flex', minHeight:"100vh", backgroundColor:"var(--backGroundColor)"}}>
          <Sidenav/>
          <Box component="main" sx={{flexGrow:1,p:1}}>  
             <div className="group-main">
                <div className="group-convers-detail">
                  <AllGroups/>
                </div>
                <div className="all-joined-group-list">
                  <div className="group-as-heading">
                    <h2 >Joined Groups</h2>
                  </div>
                  <div className="group-ined-list">
                    {
                      JoinedGroupData.map(
                        (data)=>{return <JoinedGroup {...data}/>}
                      )
                    }
                  </div>
                  <div className="bottom-join-create-group">
                    <button className='btn'>Join</button>
                    <button className='btn'>Create</button>
                  </div>
                </div>
             </div>
          </Box>
        </Box>
        
    </>
   
  )
}

export default Group