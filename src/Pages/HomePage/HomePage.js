import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Header2 from './Header2'
import Section from './Section'
import { AppContext } from '../../AppContext'
import axios from 'axios'
import { useState,useEffect } from 'react'

function HomePage() {

  const [HomesectionData, HomesetSectionData] = useState([]);
  const [HomesectionData1, HomesetSectionData1] = useState([]);
  const [HomesectionData2, HomesetSectionData2] = useState([]);


  useEffect(() => {
    axios.get("https://mygreenkitchen.in/mgkapi/mgkhome").then((Response)=>{
      HomesetSectionData(Response.data.exclussive_products)
      HomesetSectionData1(Response.data.packed_products)
      HomesetSectionData2(Response.data.farmfresh_products)
    })    
 }, [])

  return (
    <div>
        
        <Header />
        <Header2 />
        <Section HomesectionData={HomesectionData} 
         HomesectionData1={HomesectionData1}
         HomesectionData2={HomesectionData2}
        />
        <Footer />
        
    </div>
  )
}

export default HomePage