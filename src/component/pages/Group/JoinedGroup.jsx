import React from 'react'

const JoinedGroup = ({name,active}) => {
  return (
    <div className="joined-group-main">
      <div className="joined-group-name">
        <img src="" alt="iknd" />
        <h3>{name}</h3>
      </div>
      <div className="joined-group-active">
        <h6>{active} online Member</h6>
      </div>
    </div>
  )
}

export default JoinedGroup