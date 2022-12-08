import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { BsFillStarFill } from 'react-icons/bs'

import { AppContext } from '../../../AppContext'
import './HumpiSection.css'

function HumpiSection() {
    const {data} = useContext(AppContext)
    const [HomesectionData2, HomesetSectionData2] = useState([]);

  useEffect(() => {
    axios.get("https://mygreenkitchen.in/mgkapi/mgkhome").then((Response)=>{
      HomesetSectionData2(Response.data.farmfresh_products)
    })    
 }, [])

  return (
    <div className='HumpiSection-Main'>
    
    <img className="HumpiImg" src={data ? data.banners[1].url : ""} alt="" />
    
    <div className="humpisection1">
      <div>
        <p>KARNATAKA</p><br />
        <h2>Humpi</h2>
        <div className="humpisection2">
          <h5><u> Must See Experiences</u></h5>
          <h5><u> Planning A Trip</u></h5>
          <h5><u> Rooms And Stays</u></h5>
        </div>
        <br />
        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
        <div className="humpisection3">
    <img alt='' className='humpisection5-img' src={data ? data.banners[1].url : ""} />
    <div className="humpisection3-1">
    <img alt='' className='humpisection5-img1' src={data ? data.banners[1].url : ""} />
    <img alt='' className='humpisection5-img2' src={data ? data.banners[1].url : ""} />
    </div>
    </div>
    </div>
      <div className="humpisection4">
        <h3>Top Experiences</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to <br /> make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
        <div className="humpisection2">
          <h5><u>sights</u></h5>
          <h5><u>Restaurants</u></h5>
          <h5><u>Shopping</u></h5>
          <h5><u>Entertainment</u></h5>
        </div>
        <div className="section4-card">
    {HomesectionData2.map((obj, index) => (
      <div key={index}>
    <Card className='section4-card1'>
      <Card.Img style={{ borderRadius: '20px'}} variant="top" src={obj.images[0]} />
    </Card>
    <div className='s4-cards1'>
    {obj.title}
    </div>
    <div className='section4-cardNames2'>
    <p className='s4-p1'>Lorem Ipsum is simply dummy text of the printing...</p>
    </div>
    </div>
     ))}
     </div>
     </div>
     <div className="humpisection5">
     <h3>Top Experiences</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to <br /> make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
      
        <div className='humpiusersection2-main'>
        <div className="humpiusersection2-icons">
          <div className="humpisectioncard1">
        <Card style={{ width: '18rem',height:'7rem' }}>
      <Card.Body>
      <h4 className='humpiusersection2-content'>Login & Security</h4>
      <p className='humpiusersection2-content'>Update Your Password And Secure Your Account</p>
      </Card.Body>
    </Card>
    </div>
    <div className="humpisectioncard1">
    <Card className='humpiusersection2-card1' style={{ width: '18rem',height:'7rem',marginLeft:"2rem" }}>
      <Card.Body>
      <h4 className='humpiusersection2-content'>Dot Card Details</h4>
      <p className='humpiusersection2-content'>Check Your Card Balance,point added and can add money</p>
      </Card.Body>
    </Card>
    </div>
    <div className="humpisectioncard1">
    <Card className='humpiusersection2-card2' style={{ width: '18rem',height:'7rem',marginLeft:"2rem" }}>
      <Card.Body>
      <h4 className='humpiusersection2-content'>Your Travel History</h4>
      <p className='humpiusersection2-content'>History of stay,travel experiences and other facilities accessed.</p>
      </Card.Body>
     </Card>
     </div>
     <div className="humpisectioncard1">
    <Card className='humpiusersection2-card2' style={{ width: '18rem',height:'7rem',marginLeft:"2rem" }}>
      <Card.Body>
      <h4 className='humpiusersection2-content'>Your Travel History</h4>
      <p className='humpiusersection2-content'>History of stay,travel experiences and other facilities accessed.</p>
      </Card.Body>
     </Card>
     </div>
     </div>
    </div>
    <div className='humpiusersection2-main'>
        <div className="humpiusersection2-icons">
          <div className="humpisectioncard1">
        <Card style={{ width: '18rem',height:'7rem' }}>
      <Card.Body>
      <h4 className='humpiusersection2-content'>Login & Security</h4>
      <p className='humpiusersection2-content'>Update Your Password And Secure Your Account</p>
      </Card.Body>
    </Card>
    </div>
    <div className="humpisectioncard1">
    <Card className='humpiusersection2-card1' style={{ width: '18rem',height:'7rem',marginLeft:"2rem" }}>
      <Card.Body>
      <h4 className='humpiusersection2-content'>Dot Card Details</h4>
      <p className='humpiusersection2-content'>Check Your Card Balance,point added and can add money</p>
      </Card.Body>
    </Card>
    </div>
    <div className="humpisectioncard1">
    <Card className='humpiusersection2-card2' style={{ width: '18rem',height:'7rem',marginLeft:"2rem" }}>
      <Card.Body>
      <h4 className='humpiusersection2-content'>Your Travel History</h4>
      <p className='humpiusersection2-content'>History of stay,travel experiences and other facilities accessed.</p>
      </Card.Body>
     </Card>
     </div>
     <div className="humpisectioncard1">
    <Card className='humpiusersection2-card2' style={{ width: '18rem',height:'7rem',marginLeft:"2rem" }}>
      <Card.Body>
      <h4 className='humpiusersection2-content'>Your Travel History</h4>
      <p className='humpiusersection2-content'>History of stay,travel experiences and other facilities accessed.</p>
      </Card.Body>
     </Card>
     </div>
     </div>
    </div>
     </div>
     <div className="humpisection6">
     <h3>Find Your Stay</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to <br /> make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
        <div className="section4-card">
    {HomesectionData2.map((obj, index) => (
      <div key={index}>
    <Card  className='section4-card1'>
      <Card.Img style={{ borderRadius: '20px'}} variant="top" src={obj.images[0]} />
    </Card>
    <div className='s4-cards1'>
    {obj.title}
    </div>
    <div className='section4-cardNames2'>
    <p className='s4-p1'>3 Beds,2 Bedrooms</p>
    </div>
    <div className='section4-rate'>
    <p className='s4-r1'>₹4679/night</p>
    </div>
    <BsFillStarFill className='review1'  />
    <p className='p1'>(70 Reviews)</p>
    </div>
     ))}
     </div>
     <div className='section2-button'>
    <button className='section2-button1'>Discover More Stays</button>
    </div>
     </div>
    </div>
  )
}

export default HumpiSection