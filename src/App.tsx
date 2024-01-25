import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page1 from './componets/Page1'
import About from './componets/About'
import Skills from './componets/Skills'
import ProjectCount from './componets/ProjectCount'
import Services from './componets/Services'
import Portfolio from './componets/Portfolio'
import Resume from './componets/Resume'
import Contact from './componets/Contact'
import Logo from './componets/Logo'
import Footer from './componets/Footer'

function App() {


  return (
    <>
    <div className=''>
      <Page1 />
      <About />
      <Skills />
      <ProjectCount />
      <Services /> 
      <Portfolio /> 
      <Resume />
      <Logo />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default App
