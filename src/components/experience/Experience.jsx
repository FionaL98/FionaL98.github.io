import React from 'react'
import './experience.css'

//icons
import {AiOutlineHtml5} from 'react-icons/ai'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {BsBootstrap} from 'react-icons/bs'
import {FaReact} from 'react-icons/fa'
import {SiThymeleaf} from 'react-icons/si'

import {SiJava} from 'react-icons/si'
import {SiSpringboot} from 'react-icons/si'
import {FaPython} from 'react-icons/fa'
import {AiOutlineConsoleSql} from 'react-icons/ai'
import {FaNodeJs} from 'react-icons/fa'

export const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <AiOutlineHtml5 className="experience_details-icons"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiCss3 className="experience_details-icons"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiJavascript className="experience_details-icons"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsBootstrap className="experience_details-icons"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <FaReact className="experience_details-icons"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <SiThymeleaf className="experience_details-icons"/>
              <div>
                <h4>Thymeleaf</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
          <article className="experience_details">
              <SiJava className="experience_details-icons"/>
              <div>
                <h4>Java</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiSpringboot className="experience_details-icons"/>
              <div>
                <h4>SpringBoot</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <FaPython className="experience_details-icons"/>
              <div>
                <h4>Python</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <AiOutlineConsoleSql className="experience_details-icons"/>
              <div>
                <h4>SQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <FaNodeJs className="experience_details-icons"/>
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Experience 
