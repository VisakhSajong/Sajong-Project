import React, { useEffect } from 'react'
import { Button, Dropdown, Form } from 'react-bootstrap'
import './Header.css'
import { BsFillCreditCardFill, BsSearch} from "react-icons/bs";
// import { Search } from '@rsuite/icons';
import "rsuite/dist/rsuite.min.css";
// import { IconButton } from "rsuite";
// import image from './image.jpg'
import img2 from './img2.jpg'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import UserAccount from '../UserAccount/UserAccount';
import axios from 'axios';
import { useState } from 'react';



function Header() {

  // const handleClick =()=>{
  //   console.log("Clicked");
  // }
  const [data, setData] = useState();


  const navigate=useNavigate()

  const navigateToUser = () => {
  
    navigate("/user");
  };

     useEffect(() => {
      
        axios.get("https://mygreenkitchen.in/mgkapi/mgkhome").then((Response)=>{
          // console.log(Response.data);
        setData(Response.data)
         
        })
          
        
     }, [])
     
      

  return (
    <div className='header'>
      <img className='header-images' src={data ? data.banners[0].url : ""} alt="images" />
      <div className='header-images2'>
        <img className="img2" src={img2} alt="" />
        </div>
          <div className='header-button'>
          <Button variant='danger'
     className='button'>Be A Dot Card Holder </Button> 
            <br />
          <Button variant='light'
     className='button'>More Destination Camps</Button> 
     </div>    
          <div className="icons">
        <BsSearch className='icon1' size={30}/> 
       <BsFillCreditCardFill className='credit' size={30} color='white' />      {/* onClick={handleClick} */}
       <img onClick={navigateToUser} src={img2} className='avatar' alt='' />
       <Routes>
      <Route  path='UserAccount' element={<UserAccount />}>
      </Route>
      </Routes>
        </div>
    <div className='text'>
   <h1>{data ? data.banners[0].title : ""} <br /> trip planner</h1><br />
    <h4 className='text1'>Dot we make your trips <br /> more memorable...</h4>
  </div>
      <div className="input3">
    <div className="input4" >
    <Form.Control
              type="search"
              placeholder="Where are you Going"
              className="me-2"
              aria-label="Search"
            />
              <div className="Hdropdown">
                  <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        Choose Destination
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu">
        <Dropdown.Item href="#/action-1">Humbi</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Alappuzha</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Ooty</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Mysore</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Kabini</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </div>
          </div>
          </div>
    
        <div className='button3'>
          <br />
        <button className='button4'>
       <h6 className='bname'>Humpi</h6> 
      </button>
      <button className='button4'>
      <h6 className='bname'>Alapuzha</h6>  
      </button>
      <button className='button4'>
      <h6 className='bname'>Ooty</h6>  
      </button>
      <button className='button4'>
      <h6 className='bname'>Mysore</h6>  
      </button>
      <button className='button4'>
      <h6 className='bname'>Kabini</h6>  
      </button>
      <button className='button4'>
      <h6 className='bname'>Gokarna</h6>   
      </button>
         </div>  
            
        
         </div>
  )
}

export default Header