import React from 'react'
import "./Test.css"

const LiveTest = ({testName,duration,date,question,endTime}) => {
  return (
    <div className='test-main'>
        <div className="test-name">
            <h3>{testName} </h3>
            <h4>End- <spant>{endTime}</spant></h4>
        </div>
        <div className="test-duration-question">
            <h4>Duration: <spant>{duration} Hr</spant></h4>
            <h4><spant>{question}</spant> Question</h4>
        </div>
        <div className="test-date-button">
            <h4>Date-<spant>{date} </spant></h4>
            <button className='btn'>Live</button>
        </div>
    </div>
  )
}

export default LiveTest