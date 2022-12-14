import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Card,Dropdown } from 'react-bootstrap'
import { BsBank, BsFillStarFill } from 'react-icons/bs'
import './N-Section.css'

function Section() {
  const [data, setData] = useState();
  const [sectionData, setSectionData] = useState([]);
  const [sectionData1, setSectionData1] = useState([]);
  useEffect(() => {
      
    axios.get("https://mygreenkitchen.in/mgkapi/mgkhome").then((Response)=>{
    setData(Response.data)
    setSectionData(Response.data.exclussive_products) 
    setSectionData1(Response.data.packed_products) 
    })
    }, [])
  
  return (
    <div>
      <div className="N-icons">
      <BsBank className='N-icons1' />
      <BsBank className='N-icons1' />
      <BsBank className='N-icons1' />
      <BsBank className='N-icons1' />
      <BsBank className='N-icons1' />
      <BsBank className='N-icons1'/>
      <BsBank className='N-icons1' />
      <BsBank className='N-icons1'/>
      <BsBank className='N-icons1'/>
      </div>
      <div className='Ksection-cardNames'>
    {sectionData.map((obj, index) => ( 
        <div key={index} className='Ks-cards1'>
      {obj.title}
    </div>
    ))}
    </div>
      <div className="Nsection-main">
    <div className="N-section">
    <h1 className='Nh6s'>{data ? data.banners[0].title : ""}</h1>
    <h6 className='Nh6'>10 Destinations Found</h6>
    <div className="Ndropdown">
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
    <div className="Nsection-card">
     {sectionData1.map((obj,index)=>( 
      <div key={index}>
     <Card  className='Nsection-card1'>
      <Card.Img style={{ borderRadius: '16px',height: '14rem',width: '12rem'}} variant="top" src={obj.images[0]} />
    </Card>
    <div>
      <h4 className='Ns-cards1'>{obj.title}</h4>
        </div>
        <div className='Nsection-cardNames2'>
    <p className='Ns-p1'>Lorem ipsum may be used as a placeholder before final...</p>
    </div>
    <div className='review-main'>
    <BsFillStarFill className='Nreview1'  />
    <p className='Np1'>4.6(70 Reviews)</p> 
    </div>
    </div>
   ) )}
    {/* <Card className='Nsection-card2'>
      <Card.Img style={{ borderRadius: '16px',height: '14rem',width: '14rem'}} variant="top" src="https://images.unsplash.com/photo-1568454537842-d933259bb258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJla2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
    </Card>
    <Card className='Nsection-card3'>
      <Card.Img style={{ borderRadius: '16px',height: '14rem',width: '14rem'}} variant="top" src="https://images.unsplash.com/photo-1608825090252-a2163590fe08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
    </Card> */}

    </div>

    <div className="Nsection-card">
    {sectionData1.map((obj,index)=>( 
      <div key={index}>
     <Card  className='Nsection-card1'>
      <Card.Img style={{ borderRadius: '16px',height: '14rem',width: '12rem'}} variant="top" src={obj.images[0]} />
    </Card>
    <div>
      <h4 className='Ns-cards1'>{obj.title}</h4>
        </div>
        <div className='Nsection-cardNames2'>
    <p className='Ns-p1'>Lorem ipsum may be used as a placeholder before final...</p>
    </div>
    <div className='review-main'>
    <BsFillStarFill className='Nreview1'  />
    <p className='Np1'>4.6(70 Reviews)</p> 
    </div>
    </div>
   ) )}

    {/* <Card className='Nsection-card2'>
      <Card.Img style={{ borderRadius: '16px',height: '14rem',width: '14rem'}} variant="top" src="https://images.unsplash.com/photo-1568454537842-d933259bb258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJla2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
    </Card>
    <Card className='Nsection-card3'>
      <Card.Img style={{ borderRadius: '16px',height: '14rem',width: '14rem'}} variant="top" src="https://images.unsplash.com/photo-1608825090252-a2163590fe08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
    </Card> */}
    
    </div>
    </div>
    <div className="NMap">
    <iframe title="myFrame" className="gmap_iframe" width="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=563&amp;height=859&amp;hl=en&amp;q=india&amp;t=k&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </div>
    </div>
    </div>
  )
}

export default Section