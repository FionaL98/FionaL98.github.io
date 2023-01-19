import React from 'react'
import './footer.css'

//icons
import {CiLinkedin} from 'react-icons/ci'
import {AiOutlineGithub} from 'react-icons/ai'
import {SiLeetcode} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <ul className="links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/fionald/" target="_blank"><CiLinkedin/></a>
        <a href="https://github.com/FionaL98" target="_blank"><AiOutlineGithub/></a>
        <a href="https://leetcode.com/FionaL98/" target="_blank"><SiLeetcode/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; FIONA LI-DUONG. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer