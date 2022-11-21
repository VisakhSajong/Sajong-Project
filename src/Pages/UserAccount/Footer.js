import React from 'react'
import { Form } from 'react-bootstrap'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import './Footer.css'
import img2 from './img2.jpg'
function Footer() {
  return (
    <div className='footer'>
      <div className="footer-sections">
      <div className='footer-section1'>
    <img src={img2} alt="200" className='footer-img' />  
    <div className="footer-icons">
        <span className='f-text'>Follow Us</span>
        <div className='footer-icons2'>
           <BsInstagram className='f-instagram' />
          <BsTwitter className='f' />
          <BsFacebook className='f' />
          <BsYoutube className='f' />
        </div>
    </div>
    <div className="footer-textfield">
    <span className='f-text'>Subscribe</span>
    <Form.Control
              type="search"
              placeholder="Email address"
              className="form-control"
              aria-label="Search"
            />
    </div>
    <span className='f-text1'>You can unsubsribe any time using the unsubsribe link at <br /> the end of all emails. <u>Contact</u> Dot or view our <u> Privacy Policy</u>.</span><br /><br /><br />
    <button className='footer-button'>Sign Up</button>
    </div>
    <div className="footer-section2">
     <h6 className=''>Top Destinations</h6><br />
     <p className=''>Udaipur</p>
     <p className=''>Hampi</p>
     <p>Jaipur</p>
     <p>Andaman and Nicobar Islands</p>
     <p>Goa</p>
     <p>Agra Munnar</p>
     <p>Udaipur</p>
     <p>Hampi</p>
     <p>Jaipur</p>
     <p>Andaman and Nicobar Islands</p>
     <p>Goa</p>
     <p>Agra Munnar</p>
     <p>Jaipur</p>
    </div>
    <div className="footer-section2">
    <h6 className=''>Travel Interests</h6><br />
     <p className=''>Adventure Travel</p>
     <p className=''>Art and Culture</p>
     <p>Beaches,coasts and Islands</p>
     <p>Family Holidays</p>
     <p>Goa</p>
     <p>Agra Munnar</p>
     <p>Udaipur</p>
     <p>Hampi</p>
     <p>Wildlife and Nature</p>
    </div>
    <div className="footer-section2">  
    <h6 className=''>About Us</h6><br />
     <p className=''>About Dot</p>
     <p className=''>Contact Us</p>
     <p>Privacy Policy</p>
     <p>Terms and Conditions</p>
     <p>Work For Us</p>
      </div>
      </div>
      <br />
      <p className='footer-text'>© 2022 All Rights Reserved. No part of this site may be reproduced without our written permission.</p>
    </div>
  )
}

export default Footer