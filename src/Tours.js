import React from 'react'
import { useState } from 'react'

const Tours = ({name,id,price,image,info,removeTour}) => {
   const [readMore,setReadMore] = useState(false)

     
  return (
 <article className='each-tour'>
    <img src={image} alt={name} width={"100%"} height={"350px"}/>
    <div className='name-and-price'>
        <h4>{name}</h4>
        <span>{price}</span>
    </div>
    <div className='info'>
        {readMore ? info : info.substring(0,200) + "..."}
<button onClick={()=> setReadMore(!readMore)}>{readMore ? "showLess" : "showMore"}</button>
    </div>
    <button onClick={() =>{
removeTour(id)
    }}>not interested</button>
 </article>
  )
}

export default Tours
