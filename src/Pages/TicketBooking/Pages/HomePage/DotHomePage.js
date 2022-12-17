import React from 'react'
import { useNavigate } from 'react-router';
import './DotHomePage.css'
import img2 from './img2.jpg'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import UserAccount from '../../../UserAccount/UserAccount';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import { MDBIcon } from 'mdb-react-ui-kit';


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
     <div className="dotsectioncard1">
      <img className='dotsectioncard1img' src="https://s2.rdbuz.com/web/images/home/benefits.png" alt="" />
      <div className="dotsectioncard1Text">UNMATCHED BENEFITS</div>
      <p className='dotsectioncard1Text'>We take care of your travel beyond ticketing by providing you with innovative and unique benefits.</p>
      </div> 
     <div className="dotsectioncard2">
     <img className='dotsectioncard1img' src="https://s2.rdbuz.com/web/images/home/benefits.png" alt="" />
      <div className="dotsectioncard1Text">UNMATCHED BENEFITS</div>
      <p className='dotsectioncard1Text'>We take care of your travel beyond ticketing by providing you with innovative and unique benefits.</p>
      
      </div> 
     <div className="dotsectioncard3">
     <img className='dotsectioncard1img' src="https://s2.rdbuz.com/web/images/home/benefits.png" alt="" />
      <div className="dotsectioncard1Text">UNMATCHED BENEFITS</div>
      <p className='dotsectioncard1Text'>We take care of your travel beyond ticketing by providing you with innovative and unique benefits.</p>
      </div> 
    </div>
    </div>
    <div className="dotsection4">
      <h2 className='dotsection4Text'>AWARDS & RECOGNITION</h2>
      <div className="dotsection4contents">
      <div className="dotsection4content1">
        <img src="https://s2.rdbuz.com/web/images/home/awards/Business_Standard1.png" alt="" />
        <p className='dotsection4content1Text'>Most Innovative <br /> Company</p>
      </div>
      <div className="dotsection4content2">
        <img src="https://s2.rdbuz.com/web/images/home/awards/Business_Standard1.png" alt="" />
        <p className='dotsection4content1Text'>Most Innovative <br /> Company</p>
      </div>
      <div className="dotsection4content2">
        <img src="https://s2.rdbuz.com/web/images/home/awards/Business_Standard1.png" alt="" />
        <p className='dotsection4content1Text'>Most Innovative <br /> Company</p>
      </div>
      </div>
    </div>
    <div className="dotsection5">
    <h2 className='dotsection4Text'>OUR GLOBAL PRESENCE</h2>
    <div className="dotsection5flag1">
    <img className='dotsection5icon1' src="https://www.sciencekids.co.nz/images/pictures/flags680/India.jpg" alt="" />
    <img className='dotsection5icon2' src="https://www.sciencekids.co.nz/images/pictures/flags680/India.jpg" alt="" />
    <img className='dotsection5icon2' src="https://www.sciencekids.co.nz/images/pictures/flags680/India.jpg" alt="" />
    </div>
    <div className="dotsection5flag1">
    <img className='dotsection5icon1' src="https://www.sciencekids.co.nz/images/pictures/flags680/India.jpg" alt="" />
    <img className='dotsection5icon2' src="https://www.sciencekids.co.nz/images/pictures/flags680/India.jpg" alt="" />
    <img className='dotsection5icon2' src="https://www.sciencekids.co.nz/images/pictures/flags680/India.jpg" alt="" />
    </div>
    </div>
    <div className="dotsection6"> 
    <div className="dotfooter-section2">
     <h6 className=''>About RedBus</h6><br />
     <p className=''>About Us</p>
     <p className=''>Contact Us</p>
     <p>Mobile Version</p>
     <p>redBus on Mobile</p>
     <p>Sitemap</p>
     <p>Offers</p>
     <p>Carrears</p>
    </div>
    <div className="dotfooter-section3">
     <h6 className=''>About RedBus</h6><br />
     <p className=''>About Us</p>
     <p className=''>Contact Us</p>
     <p>Mobile Version</p>
     <p>redBus on Mobile</p>
     <p>Sitemap</p>
     <p>Offers</p>
     <p>Carrears</p>
    </div>
    <div className="dotfooter-section3">
     <h6 className=''>About RedBus</h6><br />
     <p className=''>About Us</p>
     <p className=''>Contact Us</p>
     <p>Mobile Version</p>
     <p>redBus on Mobile</p>
     <p>Sitemap</p>
     <p>Offers</p>
     <p>Carrears</p>
    </div>
    </div>
  </div>
  )
}

export default DotHomePage