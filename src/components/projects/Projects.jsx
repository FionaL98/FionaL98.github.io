import React from 'react'
import './projects.css'

//images
import GroceryProject from '../../assets/natasha-t-unsplash.jpg'
import MatrixProject from '../../assets/marcella-marcella-unsplash.jpg'
import TaskProject from '../../assets/lauren-sauder-unsplash.jpg'

//array containing all projects
const data = [
  {
    id: 1,
    image: GroceryProject,
    img_alt: "natasha-t-unsplash.jpg",
    title: "E-Commerce Grocery Shop",
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 2,
    image: MatrixProject,
    img_alt: "marcella-marcella-unsplash.jpg",
    title: "Matrix Math Game",
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 3,
    image: TaskProject,
    img_alt: "lauren-sauder-unsplash.jpg",
    title: "Tasks App",
    github: "https://github.com/FionaL98/ToDoApp",
    demo: "https://github.com"
  },
]

export const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container projects_container'>
        {
          data.map(({id, image, img_alt, title, github, demo}) => {
            return (
              <article key={id} className="project_items">
                <div className="project_item-image">
                  <img src={image} alt={img_alt} />
                </div>
                <h3>{title}</h3>
                <div className="project_item-cta">
                  <a href={github} className="btn" target="_blank">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }

        {/* <article className="project_items">
          <div className="project_item-iamge">
            <img src={GroceryProject} alt="project-photo" />
          </div>
          <h3>E-Commerce Grocery Shop</h3>
          <div className="project_item-cta">
            <a href="htteps://github.com" className="btn" target="_blank">Github</a>
            <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>

        <article className="project_items">
          <div className="project_item-iamge">
            <img src={GroceryProject} alt="project-photo" />
          </div>
          <h3>Matrix Math Game</h3>
          <div className="project_item-cta">
            <a href="htteps://github.com" className="btn" target="_blank">Github</a>
            <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>

        <article className="project_items">
          <div className="project_item-iamge">
            <img src={GroceryProject} alt="project-photo" />
          </div>
          <h3>Tasks App </h3>
          <div className="project_item-cta">
            <a href="htteps://github.com" className="btn" target="_blank">Github</a>
            <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article> */}
        
      </div>
    </section>
    )
}

export default Projects