import React from 'react'
import { BsCreditCard, BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router'
import img2 from './img2.jpg'
import './NavBar.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'

function NavBar() {
  const navigate=useNavigate()

  const navigateToHome = () => {
  
    navigate("/");
  };

  return (
    <div className='NavBar'>
     <div className='NavBar-images2'>
        <img onClick={navigateToHome} className="NavBar-img2" src={img2} alt="" />
        <Routes>
      <Route path='home' element={<HomePage />}>
      </Route>
      </Routes>
        </div> 
        <div className="NavBar-icons">
        <BsSearch className='NavBar-icon1' size={22}/> 
        <BsCreditCard className='NavBar-credit' size={22}  />
        <img src={img2} className='useravatar' />
        </div>
        <div className='shadow'></div>
    </div>
  )
}

export default NavBar