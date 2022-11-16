import React from 'react'
import { Card } from 'react-bootstrap'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'
import './Section.css'

function Section() {
  return (
                          // First Section 

    <div className='section'>
        <h1 className='h6s'>What's Next?</h1>
        <BsFillArrowLeftSquareFill className='sectionIcon' />
        <BsFillArrowRightSquareFill className='sectionIcon1'/>
        <div className="section-card">
      <Card  className='section-card1'>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1623995523843-f282cd8aa1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2FybmF0YWthJTIwdGlnZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
    </Card>
    <Card className='section-card2'>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1568454537842-d933259bb258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJla2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
    </Card>
    <Card className='section-card3'>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1608825090252-a2163590fe08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
    </Card>
    <Card className='section-card4'>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1576604303800-f2435c2db6bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbmV5bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
      </Card>
    </div>
    <div className='section-cardNames'>
    <h3 className='s-cards1'>National Parks</h3>
    <h3 className='s-cards2'>Trekking</h3>
    <h3 className='s-cards3'>Hill Station</h3>
    <h3 className='s-cards4'>Honey Moon</h3>
    </div>

          {/* Second Section  */}

    <div className="section2">
    <h6 className='h6'>SEASONAL SUGGESTIONS</h6>
    <h1 className='h6s'>Where to Next?</h1>
        <BsFillArrowLeftSquareFill className='sectionIcon' />
        <BsFillArrowRightSquareFill className='sectionIcon1'/>
        <div className="section2-card">
      <Card  className='section2-card1'>
      <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1661962740957-ccd5130e194e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGltYWNoYWwlMjBwcmFkZXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
    </Card>
    <Card className='section2-card2'>
      <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1661962740957-ccd5130e194e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGltYWNoYWwlMjBwcmFkZXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
    </Card>
    <Card className='section2-card3'>
      <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1661962740957-ccd5130e194e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGltYWNoYWwlMjBwcmFkZXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
    </Card>
    </div>
    </div>
    <div className='section2-cardNames'>
    <h3 className='s2-cards1'>Himachal Pradesh</h3>
    <h3 className='s2-cards2'>Ooty</h3>
    <h3 className='s2-cards3'>Manali</h3>
    
    </div>
    <div className='section2-button'>
    <button className='section2-button1'>View All Destinations</button>
    </div>

             {/* Third Section  */}

    <div className="section3">

  
    <div className='text'>
   <p> More about Dot  <br /> Membership <br />Card.</p>
  </div>
      <div className="section3-button">
      <button className='section3-button1'>Know More</button>
      </div>
    </div>
            {/* Fourth Section  */}

    <div className="section4">
    <h6 className='h6'>SEASONAL SUGGESTIONS</h6>
    <h1 className='h6s'>Where to Next?</h1>
    <div className="section4-card">
      <Card  className='section4-card1'>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1623995523843-f282cd8aa1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2FybmF0YWthJTIwdGlnZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
    </Card>
    <Card className='section4-card2'>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1568454537842-d933259bb258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJla2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
    </Card>
    <Card className='section4-card3'>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1608825090252-a2163590fe08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
    </Card>
    <Card className='section4-card4'>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1576604303800-f2435c2db6bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbmV5bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
      </Card>
    </div>
    <div className='section4-cardNames'>
    <h3 className='s4-cards1'>National Parks</h3>
    <h3 className='s4-cards2'>Trekking</h3>
    <h3 className='s4-cards3'>Hill Station</h3>
    <h3 className='s4-cards4'>Honey Moon</h3>
    </div>
    </div>

    </div>
  )
}

export default Section