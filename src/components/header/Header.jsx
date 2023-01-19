import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/MEE.PNG'

import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello I'm </h5>
        <h1> Fiona Li-Duong </h1>
        <h5 className='text-light'>Software Developer</h5>

        <CTA />
        <HeaderSocials />

        {/* MY image  */}
        <div className="my-image">
          <img src={ME} alt="myphoto" />
          {/* Freepik */}
        </div>

        <a href="#contact" className="scroll_down">Scroll Down </a>
        
      </div>
    </header>
  )
}

export default Header