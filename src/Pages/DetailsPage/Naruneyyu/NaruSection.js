import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

import { useState } from 'react'
import { HomeUrl } from '../../../Services/Services'

import './NaruSection.css'
import Rating from './Rate/Rating'

function NaruSection() {

    const [data, setData] = useState();
     
    useEffect(() => {
      
      axios.get(`${HomeUrl}`).then((Response)=>{
        // console.log(Response.data);
      setData(Response.data)  
  
      })    
   }, [])

  return (
    <div>
      <div className="NaruSection-Main">
        <div className="NaruImg-Main">
       <img className='NaruImg' src={data ? data.exclussive_products[0].images : ""} alt="404" />
       </div> 
       <div className="NaruSection1">
        <h3>{data ? data.exclussive_products[0].title : ""}</h3>
        
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
       <h4>Price:{data ? data.exclussive_products[0].product_variants[0].price : "" }</h4>
       
       </div> 
       </div>
       <div className="Rating">
       <Rating />
       </div>
    </div>
  )
}

export default NaruSection