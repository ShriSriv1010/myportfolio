import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { AutoSoundPlay } from '../Auto/AutoSoundPlay';


import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Shrijit Srivastav</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/shrijit-srivastav-1704301b1/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/ShriSriv1010" target="_blank" rel="noreferrer" ><FaGithub /></a>
      {/* <a href="https://angel.co/u/meri-gogichashvili" target="_blank" rel="noreferrer" ><Showwcase /></a> */}
      </div>
      <AutoSoundPlay/>
      <div className="footer__copyright">
        <small>Made 🖤 by <a href="https://github.com/ShriSriv1010">Shrijit</a> </small>
      </div>
    </footer> 
  )
}

export default Footer