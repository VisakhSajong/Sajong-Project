import React from 'react'
import  propTypes  from 'prop-types'
import { useMemo } from 'react'
import { Star } from 'react-bootstrap-icons'
import { useState } from 'react'



function Rate({count,rating,color,onRating}) {

            const [hoverRating, setHoverRating]= useState(0)

            const getcolor = index =>{
                if(hoverRating >=index){
                    return color.filled
                }else if(!hoverRating && rating >=index){
                    return color.filled
                }
                return color.unfilled

            }

    const starRating = useMemo(() =>{
        return Array(count)
        .fill(0)
        .map((_,i)=> i + 1)
        .map((idx) =>(
            <Star colo key={idx} className='cursor-pointer'
            onClick={()=>onRating(idx)}
            style={{color: getcolor(idx)}}
            onMouseEnter={()=>setHoverRating(idx)}
            onMouseLeave={()=>setHoverRating(0)}
            />
         ) )
         } , [count,rating,hoverRating])

  return (
    <div>
        
    {starRating}

    </div>
  )
}

    Rate.propTypes = {
        count:propTypes.number,
        rating:propTypes.number,
        onchange:propTypes.number,
        color: {
            filled: propTypes.string,
            unfilled:propTypes.string,
        }
       
    }

    Rate.defaultProps ={
        count:5,
        rating:0,
        color:{
            filled:"#f5eb3b",
            unfilled:"DCDCDC",
        }
    }

export default Rate