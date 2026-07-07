import React from 'react'
import { kitchenData } from '../data/kitchen'
import { Link } from 'react-router-dom'

const Kitchen = () => {
    const firstFiveImages = kitchenData.slice(0,5)
  return (
    <>
    <h2>KitchenItems</h2>
    <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                    <div className='imgBox'>
                         <img className='proImage' src={item.image} alt="" />
                    </div>
                )
            })
        }
        
    </div>
    
    </>
  )
}
export default Kitchen