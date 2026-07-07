import React from "react";
import { acData } from "../data/ac";
import { Link } from "react-router-dom";

const AC = () => {
  const firstFiveImages = acData.slice(0, 5);

  return (
    <>
     <h2>Air Condition</h2>
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
export default AC;
