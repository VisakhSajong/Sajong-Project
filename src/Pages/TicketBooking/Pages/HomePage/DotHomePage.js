import React from 'react'
import { useNavigate } from 'react-router';
import './DotHomePage.css'
import img2 from './img2.jpg'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import UserAccount from '../../../UserAccount/UserAccount';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import DatePicker from 'react-date-picker';




function DotHomePage() {
  const handleClick = () =>{
    console.log("Clicked");
}

const [value, onChange] = useState(new Date());
const navigate=useNavigate()

const navigateToUser = () => {

  navigate("/user");
};

  return (
    <div className='DotBusMain'>
    <div className="DotHeader">
   <div className="DotLogo">
       <img className='DotLogo' src="https://media.glassdoor.com/sqll/457169/redbus-india-squarelogo-1573642460575.png" alt="" />
   </div>
   <div className="dotHeaderMain">
   <div className="DotHeader1">
       <h6 onClick={handleClick} className='DotHeader2'>BUS TICKETS</h6>
       <h6  className='DotHeader3'>rYde</h6>
       <h6  className='DotHeader3'>redRail</h6>
       <div className="DotHeader4">
       <h6 onClick={handleClick} className='DotHeader5'>Help</h6>
       <h6  className='DotHeader6'>Manage Booking</h6>
       <img onClick={navigateToUser} src={img2} className='dotavatar' alt='' />
       <Routes>
      <Route  path='UserAccount' element={<UserAccount />}>
      </Route>
      </Routes>
   </div>
   </div>
   </div>
   </div> 
   <div className="dotimage1" style={{backgroundImage: "url("+ "https://st.redbus.in/Images/INDOFFER/FESTIVE200/Hero01.png" + ")"}} alt="">
    <div className="bannersearch">
        <div className="searchbox"> 
        <input className='searchbox' type="text" placeholder='From' />
      </div>
      <div className="searchbox1"> 
      <input className='searchbox1' type="text" placeholder='To' />
        </div>
        <DatePicker className='date' onChange={onChange} value={value} />
        <button className='searchboxButton'>Search Buses</button>
    </div>
   </div>
    <div className="dotsection">
    <div className="bannerbox">
      <img className='bannerboximg' src="https://st.redbus.in/Images/RHSS/2022/hero/100x100.png" alt="" />
        <div className="bannerboxcontent">SAVE UPTO RS 250* ON YOUR BUS TICKETS.</div>
        <div className="bannerboxcontent2">Book your favourite seat now.</div>
    </div>
    <br />
      <h1>hello</h1>
    </div>

  </div>
  )
}

export default DotHomePage