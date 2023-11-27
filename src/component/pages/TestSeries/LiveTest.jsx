import React from 'react'
import "./Test.css"

const LiveTest = ({testName,duration,date,question,endTime}) => {
  return (
    <div className='test-main'>
        <div className="test-name">
            <h3>{testName} </h3>
            <h4>End- {endTime}</h4>
        </div>
        <div className="test-duration-question">
            <h4>Duration: {duration}Hr</h4>
            <h4>{question} Question</h4>
        </div>
        <div className="test-date-button">
            <h4>Date-{date}</h4>
            <button className='btn'>Live</button>
        </div>
    </div>
  )
}

export default LiveTest