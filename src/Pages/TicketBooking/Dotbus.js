import React from 'react'
import './DotBus.css'

function Dotbus() {
        const handleClick = () =>{
            console.log("Clicked");
        }

  return (
    <div className='DotBusMain'>
      <div className="DotHeader">
        <div className="DotLogo">
            <img className='DotLogo' src="https://media.glassdoor.com/sqll/457169/redbus-india-squarelogo-1573642460575.png" alt="" />
        </div>
        <div className="DotHeader1">
            <h6 onClick={handleClick} className='DotHeader2'>BUS TICKETS</h6>
            <h6  className='DotHeader3'>rYde</h6>
            <h6  className='DotHeader3'>redRail</h6>
        </div>
        </div> 

    </div>
  )
}

export default Dotbus