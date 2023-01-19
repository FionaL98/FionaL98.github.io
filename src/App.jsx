import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'

//https://www.youtube.com/watch?v=G-Cr00UYokU

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Projects />
        <Footer />
    </>
  )
}

export default App