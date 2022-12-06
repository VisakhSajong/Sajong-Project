// import React, { useState } from "react";

// import Rate from "./Rate";

// const Rating = () => {
//   const [rating, setRating] = useState(0);
  
//   return (
//     <>


//       <div className="row">
//         <div className="col">
//           <h2>Rating</h2>
//           <Rate rating={rating} onRating={(rate) => setRating(rate)} /> 
//           <div className="rating">{rating}</div>
//         </div>
        
//       </div>
//     </>
//   );
// };


// export default Rating;
import './Rating.css'
import React from 'react'
import { useState } from 'react';
import { BsFillStarFill } from 'react-icons/bs'

const colors ={
    orange:"#FFBA5A",
    grey:"#a9a9a9"
}


function Rating() {
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
        placeholder="Write Your Reviews"
        style={styles.textarea}
      />

      <button
        style={styles.button}
      >
        Submit
      </button>
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