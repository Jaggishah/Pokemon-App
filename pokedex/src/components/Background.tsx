import React from 'react'
import pokeball1 from "../assets/pokeball.png"
import pokeball2 from "../assets/pokeball2.png"

const Background = () => {
  return (
    <div className='background'>
       <img src={pokeball1} alt="" className="pokeball pokeball-1" />
      <img src={pokeball2} alt="" className="pokeball pokeball-2" />
      <img src={pokeball1} alt="" className="pokeball pokeball-3" />
      <img src={pokeball2} alt="" className="pokeball pokeball-4" />
      <img src={pokeball1} alt="" className="pokeball pokeball-5" />
      <img src={pokeball2} alt="" className="pokeball pokeball-6" />
    </div>
  )
}

export default Background
