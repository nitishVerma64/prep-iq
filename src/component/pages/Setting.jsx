import React from 'react';
import {Box} from '@mui/material';
import Sidenav from '../Sidenav';
import Navbar from '../Navbar';

const Setting = () => {
  return (
    <>
        <Navbar/>
        <Box height={70} backgroundColor="var(--backGroundColor)"></Box>
        <Box sx={{display:'flex', minHeight:"100vh", backgroundColor:"var(--backGroundColor)"}}>
          <Sidenav/>
          <Box component="main" sx={{flexGrow:1,p:3}}>  
             <h1>hellow </h1>
          </Box>
        </Box>
        
    </>
  )
}

export default Setting