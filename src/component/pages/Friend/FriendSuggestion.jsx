import React from 'react';
import Avatar from '@mui/material/Avatar';

const FriendSuggestion = ({name,major,profileImg}) => {
  return (
    <>
        <div className="friend-details">
            <Avatar className='friend-avatar'
            alt="Remy Sharp"
            src=""
            sx={{ width: 75, height: 75 }}
            />
            <div className="friend-name-major">
                <h2>{name}</h2>
                <h4>{major}</h4>
            </div>
            <button className="btn">Add</button>
        </div>
    </>
  )
}

export default FriendSuggestion