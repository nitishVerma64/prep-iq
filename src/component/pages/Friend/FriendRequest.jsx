import React from 'react';
import Avatar from '@mui/material/Avatar';

const FriendRequest = ({name}) => {
  return (
    <>
        <div className="friend-details">
            <Avatar className='friend-avatar'
            alt="Remy Sharp"
            src=""
            sx={{ width: 40, height: 40 }}
            />
            <div className="friend-name-major">
                <h3>{name}</h3>
                <div className="friend-request-btn">
                <button className="btn">Confirm</button>
                <button className="btn">Reject</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default FriendRequest