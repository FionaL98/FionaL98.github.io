import React from 'react'
import './nav.css'

//icons
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookHeart} from 'react-icons/bi'
import {SiWheniwork} from 'react-icons/si'

//useState
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : "" }><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><BiBookHeart/></a>
      <a href="#projects" onClick={() => setActiveNav("#projects")} className={activeNav === "#projects" ? "active" : ""}><SiWheniwork/></a>
    </nav>
  )
}

export default Nav