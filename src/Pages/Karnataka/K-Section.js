import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button, Card,Dropdown } from 'react-bootstrap'
import { BsBank, BsFillStarFill } from 'react-icons/bs'
import { Router,Route, Routes, useNavigate } from 'react-router'
import { HomeUrl } from '../../Services/Services'
import Humpi from '../CardPage/Humpi/Humpi'
import './K-Section.css'


function Section() {
    const [data, setData] = useState();
    const [sectionData, setSectionData] = useState([]);
    const [sectionData1, setSectionData1] = useState([]);
    const [sectionData2, setSectionData2] = useState([]);

    useEffect(() => {
      
      axios.get(`${HomeUrl}`).then((Response)=>{
          // console.log(Response.data);
        setData(Response.data)
        setSectionData(Response.data.farmfresh_products)
        setSectionData1(Response.data.new_products)
        setSectionData2(Response.data.exclussive_products)
        })
    }, [])

    const navigate=useNavigate()

    const navigateToHumpi = () => {
      navigate("/humpi");
    };

  return (
    <div className='col-md-12'>
  <div className="K-icons">
      <BsBank className='K-icons1' />
      <BsBank className='K-icons1' />
      <BsBank className='K-icons1' />
      <BsBank className='K-icons1' />
      <BsBank className='K-icons1' />
      <BsBank className='K-icons1'/>
      <BsBank className='K-icons1' />
      <BsBank className='K-icons1'/>
      <BsBank className='K-icons1'/>
      </div>
      <div className="K-iconNames">
        {sectionData1.map((obj,index)=>(
          <div key={index} className='Ki6'>
          {obj.title}
          </div>
        ))  
        }
            </div>
      <div className="row Ksection-main">
    <div className="K-section">
    <h1 className='Kh6s'>{data ? data.banners[2].title : ""}</h1>
    <h6 className='Kh6'>{data ? data.exclussive_title : ""}</h6>
    <Button variant='light'
     className='Kbutton'>Where else you want to go?</Button> 
    <div className="Kdropdown">
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
    <div className="Ksection-card">
    {sectionData.map((obj, index) => (  
        <div key={index} className="K-sectionCardMain">
    <Card onClick={navigateToHumpi} className='Ksection-card1'>
      <Card.Img  style={{ borderRadius: '16px',height: '18rem',width: '20rem'}} variant="top" src={obj.images[0]} />
    </Card>
    <div className='Ks-cards1'>
      {obj.title}
    </div>
    <div className='Ksection-cardNames2'>
    <p className='Ks-p1'>Lorem ipsum may be used as<br /> a placeholder before final...</p>
    </div>
    <div className='Kreview-main'>
    <BsFillStarFill className='Kreview1'  />
    <p className='Kp1'>4.6(70 Reviews)</p> 
    </div>
    </div>
    ))}
    {/* <Card className='Ksection-card2'>
      <Card.Img style={{ borderRadius: '16px',height: '18rem',width: '20rem'}} variant="top" src="https://images.unsplash.com/photo-1568454537842-d933259bb258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJla2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
    </Card>
    <Card className='Ksection-card3'>
      <Card.Img style={{ borderRadius: '16px',height: '18rem',width: '20rem'}} variant="top" src="https://images.unsplash.com/photo-1608825090252-a2163590fe08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
    </Card>
    <Card  className='Ksection-card4'>
      <Card.Img style={{ borderRadius: '16px',height: '18rem',width: '20rem'}} variant="top" src="https://images.unsplash.com/photo-1623995523843-f282cd8aa1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2FybmF0YWthJTIwdGlnZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
    </Card> */}
    </div>

    <div className="Ksection-card">
    {sectionData2.map((obj, index) => ( 
      <div key={index}> 
      <Card  className='Ksection-card1'>
      <Card.Img style={{ borderRadius: '16px',height: '18rem',width: '20rem'}} variant="top" src={obj.images[0]} />
    </Card>
    <div className='Ks-cards1'>
      {obj.title}
    </div>
    <div className='Ksection-cardNames2'>
    <p className='Ks-p1'>Lorem ipsum may be used as<br /> a placeholder before final...</p>
    </div>
    <div className='Kreview-main'>
    <BsFillStarFill className='Kreview1'  />
    <p className='Kp1'>4.6(70 Reviews)</p> 
    </div>
    </div>
    ))}

    {/* <Card className='Ksection-card2'>
      <Card.Img style={{ borderRadius: '16px',height: '18rem',width: '20rem'}} variant="top" src="https://images.unsplash.com/photo-1568454537842-d933259bb258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJla2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
    </Card>
    <Card className='Ksection-card3'>
      <Card.Img style={{ borderRadius: '16px',height: '18rem',width: '20rem'}} variant="top" src="https://images.unsplash.com/photo-1608825090252-a2163590fe08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
    </Card>
    <Card  className='Ksection-card4'>
      <Card.Img style={{ borderRadius: '16px',height: '18rem',width: '20rem'}} variant="top" src="https://images.unsplash.com/photo-1623995523843-f282cd8aa1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2FybmF0YWthJTIwdGlnZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
    </Card> */}

    </div>

    <div className="Ksection-card">
    {sectionData2.map((obj, index) => ( 
      <div key={index}> 
      <Card  className='Ksection-card1'>
      <Card.Img style={{ borderRadius: '16px',height: '18rem',width: '20rem'}} variant="top" src={obj.images[0]} />
    </Card>
    <div className='Ks-cards1'>
      {obj.title}
    </div>
    <div className='Ksection-cardNames2'>
    <p className='Ks-p1'>Lorem ipsum may be used as<br /> a placeholder before final...</p>
    </div>
    <div className='Kreview-main'>
    <BsFillStarFill className='Kreview1'  />
    <p className='Kp1'>4.6(70 Reviews)</p> 
    </div>
    </div>
     ))}

    {/* <Card className='Ksection-card2'>
      <Card.Img style={{ borderRadius: '16px',height: '18rem',width: '20rem'}} variant="top" src="https://images.unsplash.com/photo-1568454537842-d933259bb258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJla2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
    </Card>
    <Card className='Ksection-card3'>
      <Card.Img style={{ borderRadius: '16px',height: '18rem',width: '20rem'}} variant="top" src="https://images.unsplash.com/photo-1608825090252-a2163590fe08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
    </Card>
    <Card  className='Ksection-card4'>
      <Card.Img style={{ borderRadius: '16px',height: '18rem',width: '20rem'}} variant="top" src="https://images.unsplash.com/photo-1623995523843-f282cd8aa1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2FybmF0YWthJTIwdGlnZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
    </Card> */}
    </div>
    </div>
    </div>
    <Routes>
      <Route path='humpi' element={<Humpi />}>
      </Route>
      </Routes>
    </div>
  )
}

export default Section