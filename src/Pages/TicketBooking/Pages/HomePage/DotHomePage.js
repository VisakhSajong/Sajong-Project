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
      <div className="dotboxes">
        <div className="dotbox1">
        <span className='dotbox1Text'>Save upto Rs 300 on Ap and TS route</span>
        <img src="https://st.redbus.in/images/offers/superhit_rav/1_1.png" alt="" />
        <span className='dotbox1Text2'>Use Code SUPERHIT</span>
        </div>
        <div className="dotbox2">
        <span className='dotbox2Text'>Save upto Rs 300 on Ap and TS route</span>
        <img src="https://st.redbus.in/Images/INDOFFER/RB200/274x148.png" alt="" />
        <span className='dotbox2Text2'>Use Code SUPERHIT</span>
        </div>
      </div>
    </div>
    <div className="dotsection2">
      <img className='dotsectionimg' src="https://mmt.servedbyadbutler.com/getad.img/;libID=3436743" alt="" />
      <div className="dotsectioncontainer">
        <span className='dotheading1'>CONVENIENCE ON-THE-GO.</span>
        <p>Enjoy the following exclusive features on the redBus app <br />
        <br />
Last Minute Booking - In a hurry to book a bus at the last minute?<br /> Choose the bus passing from your nearest boarding point and book  <br />
Boarding Point Navigation - Never lose your way while travelling to <br />
Comprehensive Ticket Details- Everything that you need to make the 
<br /> <br />
Enter your mobile number below to download the redBus mobile app.</p>
  <div className="dotinput">
  <select >
  <option value="91">91</option>
  <option value="36">36</option>
  <option value="11">11</option>
  </select>
  <input type="text" className='dotinput1' placeholder='Enter Your Mobile Number' /><br />
  <button className='dotbutton'>SMS ME THE LINK</button>
      </div>
      <div className="dotphoneimg">
        <img className='dotphoneimg1' src="https://s1.rdbuz.com/web/images/home/IOS_Android_device.png" alt="" />
      </div>
      </div>
    </div>
    <div className="dotsection3">
    <img className="dotsection3icon" src="https://s1.rdbuz.com/web/images/home/promise.png" alt="" />
    <div className='dotsection3Text'>WE PROMISE TO DELIVER</div>
    <div className="dotsectioncards">
      
    </div>

    </div>
  </div>
  )
}

export default DotHomePage