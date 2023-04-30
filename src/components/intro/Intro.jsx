import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/profile_photo.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Job Experience</h5>
              <small>0 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
              <a href="https://github.com/ankitjha-webdev?tab=repositories">Github</a>
            </article>
          </div>
          <p>
          As a Software Engineer at OdiTek Solutions, I am passionate about creating innovative solutions to complex problems and eager to continue developing my skills and making meaningful contributions to the field. With a strong foundation in computer science and a passion for programming languages, frameworks, and tools, I am dedicated to delivering high-quality software that meets the needs of users and clients alike. From collaborating with cross-functional teams to implementing new features and conducting code reviews, I am committed to excellence in every aspect of the software development lifecycle. With experience working on a range of projects using different programming languages, frameworks, and tools, I am constantly seeking new challenges and opportunities to grow as a developer.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro