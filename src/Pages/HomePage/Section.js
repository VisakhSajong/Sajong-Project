import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill, BsFillStarFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import NationalPark from '../CardPage/NationalPark/NationalPark'
import './Section.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import axios from 'axios'
import Naruneyyu from '../DetailsPage/Naruneyyu/Naruneyyu'
import { useContext } from 'react'
import { AppContext } from '../../AppContext'

function Section(props) {

  const { HomesectionData,HomesectionData1, HomesectionData2 } = props;

  const {data} = useContext(AppContext)
  
  const navigate=useNavigate()

  const navigateToNeyyu = () => {
    navigate("/Neyyu");
  };
  return (
                       // First Section 

    <div className='section'>
      <h6 className='h61'>LET US PLAN FOR YOU</h6>
        <h1 className='h6s'>{data ? data.exclussive_products[0].title : ""}</h1>
        <BsFillArrowLeftSquareFill className='sectionIcon' />
        <BsFillArrowRightSquareFill className='sectionIcon1'/>
        <div className="section-card">
        {HomesectionData.map((obj, index) => (
          <div key={index}>
      <Card onClick={navigateToNeyyu}  className='section-card1'>
      <Card.Img  variant="top" src={obj.images[0]} />
    </Card>
    <div className='s-cards1'>
        {obj.title}
    </div>
    </div>
    ))}
    </div>

    {/* <Card className='section-card2'>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1568454537842-d933259bb258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJla2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
    </Card>
    <Card className='section-card3'>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1608825090252-a2163590fe08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
    </Card>
    <Card className='section-card4'>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1576604303800-f2435c2db6bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbmV5bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
      </Card> */}
    

          {/* Second Section  */}

    <div className="homesection2">
    <h6 className='h6'>SEASONAL SUGGESTIONS</h6>
    <h1 className='h6s'>{data ? data.packed_products[0].title : ""}</h1>
        <BsFillArrowLeftSquareFill className='sectionIcon' />
        <BsFillArrowRightSquareFill className='sectionIcon1'/>
        <div className="section2-card">
     
      { HomesectionData1.map((obj,index)=>(
      
        <div key={index}>
           <Card  className='section2-card1'>
      <Card.Img variant="top" src={obj.images[0]} />
    </Card>
    <h3 className='s2-cards1'>{obj.title}</h3>
        </div>
        
      ))}
    {/* <Card className='section2-card2'>
      <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1661962740957-ccd5130e194e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGltYWNoYWwlMjBwcmFkZXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
    </Card>
    <Card className='section2-card3'>
      <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1661962740957-ccd5130e194e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGltYWNoYWwlMjBwcmFkZXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
    </Card> */}

    </div>
    </div>


    <div className='section2-button'>
    <button className='section2-button1'>View All Destinations</button>
    </div>

             {/* Third Section  */}

    <div className="section3-main">
    <img className='section3' src={data ? data.banners[1].url : ""} alt="images" />
  
    <div className='section3-text'>
   <p> More about Dot  <br /> Membership <br />Card.</p>
  </div>
      <div className="section3-button">
      <button className='section3-button1'>Know More</button>
      </div>
    </div>
            {/* Fourth Section  */}

    <div className="section4">
    <h6 className='h6'>SEASONAL SUGGESTIONS</h6>
    <h1 className='h6s'>Where To Next?</h1>
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

    {/* <Card className='section4-card2'>
      <Card.Img style={{ borderRadius: '29px'}} variant="top" src="https://images.unsplash.com/photo-1568454537842-d933259bb258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJla2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
    </Card>
    <Card className='section4-card3'>
      <Card.Img style={{ borderRadius: '29px'}} variant="top" src="https://images.unsplash.com/photo-1608825090252-a2163590fe08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
    </Card>
    <Card className='section4-card4'>
      <Card.Img style={{ borderRadius: '29px'}} variant="top" src="https://images.unsplash.com/photo-1576604303800-f2435c2db6bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbmV5bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
      </Card> */}

    </div>

  
    </div>
    <div className='section4-button'>
    <button className='section4-button1'>Discover More Stays</button>
    <h6 className='h6'>DOT EXCLUSIVE</h6>
    <h1 className='h6s'>Discover Travel Memories</h1>
    </div>
             {/* Fifth Section  */}
 <div className="section5">
  <img alt='' className='section5-img' src={data ? data.banners[1].url : ""} />
  <img alt='' src={data ? data.exclussive_products[0].images : ''} className='section5-img1' />
<p className='text5'> 14 Things to do   <br /> in Hampi</p>
  <button className='section5-button1'>Know More</button>
    <div className="section5-1">
  <p className='text5-img2'>Top Destinations for <br /> food and drink</p>
  <button className='section5-button2'>Know More</button>
  </div>
  </div>
  <div className='section5-button3'>
    <button className='section5-button4'>View More Stories</button>
    </div>
    <Routes>
      <Route path='neyyu' element={<Naruneyyu />}>
      </Route>
      </Routes>
    </div>
  )
}

export default Section