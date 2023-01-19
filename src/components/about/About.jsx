import React from 'react'
import './about.css'

import dev from '../../assets/girl.png' //darius dan


//icons
import {SiJava} from 'react-icons/si'
import {SiSpringboot} from 'react-icons/si'

import {AiOutlineHtml5} from 'react-icons/ai'
import {SiCss3} from 'react-icons/si'

import {SiAdobexd} from 'react-icons/si'
import {SiAffinitypublisher} from 'react-icons/si'

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">

                <div className="about_me">
                    <div className="about_me-image">
                        <img src ={dev} alt="about-photo" />
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <SiJava className="about_icon"/>
                            <SiSpringboot className='about_icon'/>
                            <h5>Java & Spring</h5>
                            <small> OO Programming and Design principles</small>
                        </article>

                        <article className="about_card">
                            <AiOutlineHtml5 className="about_icon"/>
                            <SiCss3 className="about_icon"/>
                            <h5>HTML & CSS</h5>
                            <small> Front-end web design and user applications </small>
                        </article>

                        <article className="about_card">
                            <SiAdobexd className="about_icon"/>
                            <SiAffinitypublisher className="about_icon"/>
                            <h5>UI / UX Design</h5>
                            <small> Wireframes and Mockups utilizing AdobeXD</small>
                        </article>
                    </div>

                    <p>
                      Hi, my name is Fiona and I am currently studying Software Development and Network Engineering. Over the past years, I have been studying and developing web-based applications both on the front-end and back-end. I am a firm believer in the belief that learning is a never-ending process, and I am continually aiming to expand my skills and knowledge within this field. 
                    </p>

                    <p>
                      I also have a Bachelors in Digital Design & Communication, and I love to create and design illustrations, products, and applications. I am especially interested in designing wireframes and mockups for web and mobile-based applications. 
                    </p>
                </div>
            </div>

        </section>
    )
}

export default About