import React from 'react';
import {Box} from '@mui/material';
import Sidenav from '../Sidenav';
import Navbar from '../Navbar';
import Avatar from '@mui/material/Avatar';
import './Profile/profileCss.css'
import Chart from './Profile/Chart.svg'

const Profile = () => {
  return (
    <>
        <Navbar/>
        <Box height={70} sx={{backgroundColor:"var(--backGroundColor)"}}></Box>
        <Box sx={{display:'flex',minHeight:"100vh", backgroundColor:"var(--backGroundColor)"}}>
          <Sidenav/>
          <Box component="main" sx={{flexGrow:1,p:3, display:"flex",flexDirection:"column"}}>  
            <div className="profile-main">
              <div className="profile-main-detail">
                  <div className="profile-main-img">
                    <Avatar
                      alt="Remy Sharp"
                      src=""
                      sx={{ width: 90, height: 90 }}
                    />
                  </div>
                  <div className="profile-main-name">
                      <h2>Nitish Verma</h2>
                      <h3>Biodata</h3>
                  </div>
                  <div className="profile-main-heading  profile-overlayer">
                    Profile
                  </div>
              </div>
              <div className="profile-main-rank-list">
                  <div className="profile-main-rank-card">
                    <h1>5</h1>
                    <h2>/2000</h2>
                    <button className="btn">
                      Distric Rank
                    </button>
                  </div>
                  <div className="profile-main-rank-card">
                    <h1>15</h1>
                    <h2>/2000</h2>
                    <button className="btn">
                      State Rank
                    </button>
                  </div>
                  <div className="profile-main-rank-card">
                    <h1>25</h1>
                    <h2>/2000</h2>
                    <button className="btn">
                      India Rank
                    </button>
                  </div>
                  <div className="profile-main-heading rank-list-overlayer">
                    Rank List
                  </div>
              </div>
              <div className="profile-main-report">
                  <div className="profile-main-report-chart" >
                      <img src={Chart} alt="" />
                  </div>
                  <div className="profile-main-report-test-report-btn">
                        <button className='test-report-btn'>OverAll Test Report</button>
                        <button className='test-report-btn'> Weekly Test Report</button>
                        <button className='test-report-btn'>Monthly Test Report</button>
                  </div>
                  <div className="profile-main-heading report-overlayer">
                    Report
                  </div>
              </div>
            </div>
          </Box>
        </Box>
    </>
  )
}

export default Profile