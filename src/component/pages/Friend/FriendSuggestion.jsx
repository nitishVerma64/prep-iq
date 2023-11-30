import React from 'react';
import Avatar from '@mui/material/Avatar';

const FriendSuggestion = ({name,major,profileImg}) => {
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
                <h5>{major}</h5>
            </div>
            <button className="btn">Add</button>
        </div>
    </>
  )
}

export default FriendSuggestion