import React from 'react'
import { Card } from 'react-bootstrap'
import { BsBank, BsFillStarFill } from 'react-icons/bs'
import './N-Section.css'

function Section() {
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
        
    <div className="N-section4">
    <h6 className='h6'>DOT EXCLUSIVE</h6>
    <h1 className='h6s'>Discover Travel Memories</h1>
    <div className="N-section4-card">
      <Card  className='N-section4-card1'>
      <Card.Img style={{ borderRadius: '29px'}} variant="top" src="https://images.unsplash.com/photo-1623995523843-f282cd8aa1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2FybmF0YWthJTIwdGlnZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
    </Card>
    <Card className='N-section4-card2'>
      <Card.Img style={{ borderRadius: '29px'}} variant="top" src="https://images.unsplash.com/photo-1568454537842-d933259bb258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJla2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
    </Card>
    <Card className='N-section4-card3'>
      <Card.Img style={{ borderRadius: '29px'}} variant="top" src="https://images.unsplash.com/photo-1608825090252-a2163590fe08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
    </Card>
    <Card className='N-section4-card4'>
      <Card.Img style={{ borderRadius: '29px'}} variant="top" src="https://images.unsplash.com/photo-1576604303800-f2435c2db6bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbmV5bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
      </Card>
    </div>
    <div className='Nsection4-cardNames'>
    <h4 className='Ns4-cards1'>Wanderlust Hampi</h4>
    <h4 className='Ns4-cards2'>Waterfall GuestHouse</h4>
    <h4 className='Ns4-cards3'>WildStone Hampi</h4>
    <h4 className='Ns4-cards4'>Hakuna Matuta Inn</h4>
    </div>
    <div className='Nsection4-cardNames2'>
    <p className='Ns4-p1'>3 Beds,2 Bedrooms</p>
    <p className='Ns4-p2'>3 Beds,2 Bedrooms</p>
    <p className='Ns4-p3'>3 Beds,2 Bedrooms</p>
    <p className='N4-p4'>3 Beds,2 Bedrooms</p>
    </div>
    <BsFillStarFill className='Nrate1'  />
    <p className='Np1'>(70 Reviews)</p> 
    <BsFillStarFill className='rate2'  />
    <p className='Np2'>(70 Reviews)</p> 
    <BsFillStarFill className='rate3'  />
    <p className='Np3'>(70 Reviews)</p> 
    <BsFillStarFill className='rate4'  />
    <p className='Np4'>(70 Reviews)</p> 
    </div>

    </div>
  )
}

export default Section