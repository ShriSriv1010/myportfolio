import React from 'react';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
// import Testimonials from './components/testimonials/Testimonials';
import Topbar from './components/topbar/Topbar';
import Experience from './components/experience/Experience';
import Volunteer from './components/experience/Volunteer';
import Education from './components/educations/Education';
import StatusBar from './components/status/StatusBar';


const App = () => {

  return (
    <>
    {/* Status bar component */}
    <StatusBar></StatusBar>
      <Header />
      <Topbar />
      <Intro />
      <Education/>
      <Experience/>
      <Volunteer/>
      <Projects />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App
