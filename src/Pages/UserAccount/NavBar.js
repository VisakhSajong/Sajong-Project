import React from 'react'
import Avatar from 'react-avatar'
import { BsCreditCard, BsSearch } from 'react-icons/bs'
import img2 from './img2.jpg'
import './NavBar.css'

function NavBar() {
  return (
    <div className='NavBar'>
     <div className='NavBar-images2'>
        <img className="NavBar-img2" src={img2} alt="" />
        </div> 
        <div className="NavBar-icons">
        <BsSearch className='NavBar-icon1' size={22}/> 
        <BsCreditCard className='NavBar-credit' size={22}  />
        <Avatar githubHandle="sitebase" size={40} round="20px" className='NavBar-git' />
        </div>
        <div className='shadow'></div>
    </div>
  )
}

export default NavBar