import React from 'react'
import { Box } from '@mui/material'
import './Messagecss.css'

const Message = () => {
  return (
    <>
        <Box height={100}></Box>
        <div className="whatsapp-frontpage">
    
      <div className="sidebar">
    
        <div className="heading"><h1>Message</h1></div>
          <div className="chat-list">
            <div className="chat">
              <img src={"avatar"} alt="Contact" />
              <div className="chat-info">
                <h2>Harshita Kaushal  </h2>
                <p>10 new messages</p>
              </div>
            </div>
            <div className="chat">
              <img src={"avatar"} alt="Contact" />
              <div className="chat-info">
                <h2>Ashutosh</h2>
                <p>10 new message</p>
              </div>
            </div>
            <div className="chat">
              <img src={"avatar"} alt="Contact" />
              <div className="chat-info">
                <h2>Nitish</h2>
                <p>10 new message</p>
              </div>
            </div>
            
            <div className="chat">
              <img src={"avatar"} alt="Contact" />
              <div className="chat-info">
                <h2>Ajay</h2>
                <p>10 new message</p>
              </div>
            </div>
          
          
            
          </div>
      </div>

    
      <div className="chat-interface">
        {/*Individual complete chat will be here*/}
      </div>
    </div>
    </>
  )
}

export default Message