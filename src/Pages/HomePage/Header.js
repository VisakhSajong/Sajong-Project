import React from 'react'
import { Button, Container, Dropdown, Form, Navbar } from 'react-bootstrap'
import './Header.css'
import { BsFillCreditCardFill, BsSearch} from "react-icons/bs";
import Avatar from 'react-avatar'
import { Search } from '@rsuite/icons';
import "rsuite/dist/rsuite.min.css";
import { IconButton } from "rsuite";
function Header() {
  const ButtonStyle = { margin: "0px 10px" };
  return (
    <div className='header'>
      
    <div className=''>
      
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
          <Button variant='danger'
     className='button'>Be A Dot Card Holder </Button> 
            <br />
          <Button variant='light'
     className='button'>More Destination Camps</Button>     
          </Form>
        </Navbar.Collapse>   
        <BsSearch className='icon1' size={30}/> 
        <div className="icons"> 
        <BsFillCreditCardFill className='credit' size={30} color='white' />
        </div>
        <Avatar githubHandle="sitebase" size={40} round="20px" className='git' />
      </Container>
    </Navbar>
  </div> 
  <div className="img2">
        
  </div>
  <div className='text'>
    <h1>India's new <br /> trip planner</h1><br />
    <h4>Dot we make your trips <br /> more memorable...</h4><br /><br />
  </div>
    <div className='input'>
      <div className="input3">
    <Form className="input4" >
    <Form.Control
              type="search"
              placeholder="Where are you Going"
              className="me-2"
              aria-label="Search"
            />
            <IconButton icon={<Search />} color="red" 
                appearance="primary" style={ButtonStyle} className='icon3' />
                  <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        Choose Destination
      </Dropdown.Toggle>

      <Dropdown.Menu class="dropdown-menu">
        <Dropdown.Item href="#/action-1">Humbi</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Alappuzha</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Ooty</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Mysore</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Kabini</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </Form>
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