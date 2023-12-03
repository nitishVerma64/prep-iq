import React from 'react';
import {Box} from '@mui/material';
import Sidenav from '../Sidenav';
import Navbar from '../Navbar';
import notificationData from './Notification/notificationData';
import NotificationBox from './Notification/NotificationBox';
import './Notification/notification.css'

const Notifications = () => {
  return (
    <>
        <Navbar/>
        <Box height={70} backgroundColor="var(--backGroundColor)"></Box>
        <Box sx={{display:'flex', minHeight:"100vh", backgroundColor:"var(--backGroundColor)"}}>
          <Sidenav/>
          <Box component="main" sx={{flexGrow:1,p:3}}>  
             <h1>Notifications</h1>
             <div className="notification-box">
             {notificationData.map((data)=>{return <NotificationBox {...data}/>})}
             </div>
          </Box>
        </Box>
        
    </>
  )
}

export default Notifications