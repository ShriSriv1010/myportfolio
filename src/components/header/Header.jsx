import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ankit Kumar</h1>
        <h5>Software Engineer at Oditek Solutions <span style={{marginLeft:".5rem", marginBottom:"2rem"}}> (*^_^*)</span>  </h5>
        <h5 className="text-light">Passionate about Full Stack Development</h5>
        <h5 className="text-light">Working on MEAN Stack Team</h5>

        <CTA />
        
        <a href="#contact" className="scroll__down" style={{marginTop:"2rem"}} > Scroll Down</a>
        {/* <img src={scroll} className="scroll"/> */}
        
        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header