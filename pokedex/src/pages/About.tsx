import React from 'react'
import Wrapper from '../sections/Wrapper'
import {  FaGithub, FaLinkedin } from "react-icons/fa";
const About = () => {
  return (
    <div className='profile'>
      <h1 className="profile-text"> Hi, I am Jaggi</h1>
      <h2 className="profile-text">The creator of this awesome pokedox</h2>
      <h4 className="profile-text">This project is create for just fun</h4>
      <div className="profile-links">
        <a href="https://github.com/Jaggishah">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/jugdeep-singh/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  )
}

export default Wrapper(About)
