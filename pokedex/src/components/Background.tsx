import React from 'react'
import pokeball1 from "../assets/pokeball.png"
import pokeball2 from "../assets/pokeball2.png"

const Background = () => {
  return (
    <div className='background'>
      <img src={pokeball1} alt='pokeball1'  className='pokeball pokeball1'/>
      <img src={pokeball2} alt='pokeball1'  className='pokeball pokeball2'/>
    </div>
  )
}

export default Background
