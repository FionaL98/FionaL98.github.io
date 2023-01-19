import React from 'react'
import CV from '../../assets/FIONALIDUONG.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className="btn">Download CV</a>
        <a href="#projects" className='btn btn-primary'>Projects</a>
    </div>
  )
}

export default CTA