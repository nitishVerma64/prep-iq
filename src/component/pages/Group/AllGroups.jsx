import React from 'react'
import AllGroupBox from './AllGroupBox';
import AllGroupData from './AllGroupData';

const AllGroups = () => {
  return (
    <div className='All-group-main'>
        <h1>Popular Groups</h1>
        <div className="AllGroupList">
            {
              AllGroupData.map((data) => {
                return <AllGroupBox {...data} />
              })
            }  
        </div>
    </div>
  )
}

export default AllGroups