import './Rating.css'
import React from 'react'
import { useState } from 'react';
import { BsFillStarFill } from 'react-icons/bs'

const colors ={
    orange:"#FFBA5A",
    grey:"#a9a9a9"
}


function Rating() {
  const [review, setReview] = useState([]);
  const [listing,setListing] = useState(''); 
      const [currentValue, setCurrentValue] = useState(0);
      const [hoverValue, setHoverValue] = useState(undefined);
        const stars=Array(5).fill(0)

        const handleClick = value => {
            setCurrentValue(value)
          }
        
          const handleMouseOver = newHoverValue => {
            setHoverValue(newHoverValue)
          };
        
          const handleMouseLeave = () => {
            setHoverValue(undefined)
          }

  return (
    <div style={styles.container}>
    
    <div style={styles.stars}>
        {stars.map((_,index)=>(
         <BsFillStarFill key={index} 
         size={15}
         style={{cursor:"pointer"}}
         onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
         /> 
        ))}
    </div>
    <div className="val">{currentValue}(70 Reviews)</div>
    <textarea
        value={listing}
        onChange={(e)=>setListing(e.target.value)}
        placeholder="Write Your Reviews"
        style={styles.textarea} />
      <button style={styles.button} onClick={()=>setReview([...review,listing])}>
        Submit
      </button>
      {
        review.map((value)=>(
      <div style={styles.button} className="review">
            <p>{value}</p>
        </div>
         ))
        }
    </div>
  )
}



const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    },
    textarea: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      padding: 10,
      margin: "20px 0",
      minHeight: 75,
      width: 300
    },
    button: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      width: 300,
      padding: 10,
    }
  
  };
  

export default Rating