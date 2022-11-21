import React from 'react'
import './Section.css'

import Avatar from 'react-avatar'
import { BsArrowCounterclockwise, BsBuilding, BsCamera, BsClock, BsCreditCard, BsLock } from 'react-icons/bs'
import { Card } from 'react-bootstrap'
function Section() {
  return (
    <div className='Section'>
        <div className='user-sections'>
            <div className="section1">
        <div className="myAccount">
        <h1>My Account</h1>
        </div>
        <div className="section-icons">
        <Avatar githubHandle="sitebase" size={40} round="20px" className='section-git' /><br />
        <BsCamera size={20} className='section-cam' />
        </div>
        <div className="section-text">
            <h4>John Mathew</h4>
            <p className='section-text1'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
        </div>
       <u>Edit</u>  <br /><br />
       <u>Your Identity is Protected</u> 
        </div>
            <div className="section2">
            <h4 className='section2-p'> <u> Go to Profile </u></h4>
            <div className="user-details">
                <h6 className=''>Name</h6>
                <h6 className='section2-h6'>Gender</h6>
                <h6 className='section2-h6'>Email</h6>
                <h6 className='section2-h7'>Phone Numbers</h6>
            </div>
            <div className="user-details">
                <p className=''>John Mathew</p>
                <p className='section2-p1'>Male</p>
                <p className='section2-p2'>johnmathew@gmail.com</p>
                <p className='section2-p3'>9876635333</p>
            </div>
            <u className='s-Edit'>Edit</u>
            <div className="section-Address">
            <div className="user-details">
            <h6 className=''>Address</h6>
            </div>
            
            <div className="user-details">
                <p className=''>#123,Address Line 1, Address Line 2</p>
                
            </div>
            <div className="user-details">
                <p className=''>Location</p> 
            </div>
            <u className='user-details'>Edit</u>  <br /><br />
            </div>
        </div>
        </div>
        <div className='section2-main'>
        <div className="section2-icons">
         
        <Card style={{ width: '18rem',height:'12rem' }}>
      <Card.Body>
      <BsLock className='section-icon1'  size={25} />
       
      <h4 className='section2-content'>Login & Security</h4>
      <p className='section2-content'>Update Your Password And Secure Your Account</p>
      </Card.Body>
    </Card>
    <Card className='section2-card1' style={{ width: '18rem',height:'12rem' }}>
      <Card.Body>
      <BsCreditCard className='section-icon1'  size={25} />
      <h4 className='section2-content'>Dot Card Details</h4>
      <p className='section2-content'>Check Your Card Balance,point added and can add money to the Dot Card.</p>
      </Card.Body>
    </Card>
    <Card className='section2-card2' style={{ width: '18rem',height:'12rem' }}>
      <Card.Body>
      <BsArrowCounterclockwise className='section-icon1'  size={25} /> 
      <h4 className='section2-content'>Your Travel History</h4>
      <p className='section2-content'>History of stay,travel experiences and other facilities accessed.</p>
      </Card.Body>
     </Card>
        </div>

      
    </div>
        
    </div>
  )
}

export default Section