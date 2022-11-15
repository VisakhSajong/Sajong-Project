import React from 'react'
import { BsBuilding, BsClock, BsCreditCard } from 'react-icons/bs'
import './Header2.css'

function Header2() {
  return (
    <div className='header2-main'>
        <div className="header2-icons">
      <BsBuilding className='header-icon1'  size={80} />
      <BsClock className='header-icon2'  size={80} />
      <BsCreditCard className='header-icon3'  size={80} />
      </div>
      <div className="header2-content">
      <h4 className='header2-content1'>Book You Stay</h4>
      <p className='header2-content11'>Choose from the Best Hotels,villas <br />and homstays</p>
      <button className='header2-button1'>Book Now</button>

      <h4 className='header2-content2'>Find Transportation</h4>
      <p className='header2-content22'>Find your destination and other <br />and transport availabilities</p>
      <button className='header2-button2'>Find Now</button>

      <h4 className='header2-content3'>Manage You Dot Card</h4>
      <p className='header2-content33'>Find more facilities and points by <br />using Dot Card</p>
      <button className='header2-button3'>Book Now</button>
      <h6 className='h6'>LET US PLAN FOR YOU</h6>
      </div>
      
    </div>
  )
}

export default Header2