import "./App.css";
import Page1 from "./componets/Page1";
import About from "./componets/About";
import Skills from "./componets/Skills";
import ProjectCount from "./componets/ProjectCount";
import Services from "./componets/Services";
import Portfolio from "./componets/Portfolio";
import Resume from "./componets/Resume";
import Contact from "./componets/Contact";
import Logo from "./componets/Logo";
import Footer from "./componets/Footer";
import {  Element } from "react-scroll";




function App() {
  return (
    <>
      <div className="">
        <Element name="page1">
          <Page1 />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="projectCount">
          <ProjectCount />
        </Element>
        <Element name="services">
          <Services />
        </Element>
        <Element name="portfolio">
          <Portfolio />
        </Element>
        <Element name="resume">
          <Resume />
        </Element>
        <Logo />
        <Element name="contact">
          <Contact />
        </Element>
        <Footer />
      </div>

    </>
  );
}

export default App;
