import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../../AppContext'
import './HumpiSection.css'

function HumpiSection() {
    const {data} = useContext(AppContext)

  return (
    <div className='HumpiSection-Main'>
    <div >
    <img className="HumpiImg" src={data ? data.banners[0].url : ""} alt="" />
    </div>
    </div>
  )
}

export default HumpiSection