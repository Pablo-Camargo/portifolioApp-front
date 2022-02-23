import React, {useState}from 'react'
import './Nav.css'
import {AiOutlineHome,AiOutlineUser,AiOutlineMessage} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
export default function Nav(){

  const [activeNav, setActiveNav]= useState('#'); 
  return(
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')}className={activeNav === "#home" ? 'active' : ''}>
        <AiOutlineHome />
      </a>
     <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a href="#testimonial"  onClick={() => setActiveNav('#testimonial')} className={activeNav === "#testimonial" ? 'active' : ''}>
        <RiServiceLine />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}>
        <AiOutlineMessage />
      </a>
    </nav>
  )
}