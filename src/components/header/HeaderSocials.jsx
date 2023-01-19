import React from 'react'

//importing icons for socials 
//https://react-icons.github.io/react-icons/search?q=leetcode 
import {CiLinkedin} from 'react-icons/ci'
import {AiOutlineGithub} from 'react-icons/ai'
import {SiLeetcode} from 'react-icons/si'

export const HeaderSocials = () => {
  return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com/in/fionald/" target="_blank"><CiLinkedin/></a>
            <a href="https://github.com/FionaL98" target="_blank"><AiOutlineGithub/></a>
            <a href="https://leetcode.com/FionaL98/" target="_blank"><SiLeetcode/></a>
        </div>
    )
}

export default HeaderSocials