import React from 'react'
import './Section.css'

import Avatar from 'react-avatar'
import { BsCamera } from 'react-icons/bs'
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
        Edit <br />
        Your Identity is Protected
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

        </div>
        </div>
        
    </div>
  )
}

export default Section