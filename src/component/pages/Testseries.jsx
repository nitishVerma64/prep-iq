import React from 'react';
import {Box} from '@mui/material';
import Sidenav from '../Sidenav';
import Navbar from '../Navbar';
import LiveTest from './TestSeries/LiveTest';
import UpcomingTest from './TestSeries/UpcomingTest';
import PreviousTest from './TestSeries/PreviousTest';
import liveTestData from './TestSeries/liveTestData';
import previousTestData from './TestSeries/previousTestData';
import upcomingTestData from './TestSeries/upcomingTestData';

const Testseries = () => {
  return (
    <>
      <Navbar/>
        <Box height={70} sx={{backgroundColor:"#ECF9E9"}}></Box>
        <Box sx={{display:'flex',backgroundColor:"#ECF9E9", minHeight:"100vh"}}>
          <Sidenav/>
          <Box component="main" sx={{flexGrow:1,p:3}}>
            <h2>Live Test</h2> 
            <div className="live-test-series">
              {liveTestData.map(
                (data)=> {return <LiveTest{...data}/>
              })}
            </div>
            <h2>Upcoming Test</h2>
            <div className="live-upcoming-series">
              {upcomingTestData.map(
                (data)=> {return <UpcomingTest{...data}/>
              })}
            </div>
            <h2>Previous Test</h2>
            <div className="live-previous-series" >
              {previousTestData.map(
                (data)=> {return <PreviousTest{...data}/>
              })}   
            </div>
          </Box>
         

        </Box>
        
    </>
   
  )
}

export default Testseries