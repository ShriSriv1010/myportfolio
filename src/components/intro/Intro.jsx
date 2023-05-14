import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/profile_photo.png';
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
              <a href="https://github.com/ShriSriv1010">Github</a>
            </article>
          </div>
          <p>
          As a college student pursuing a Bachelor of Technology in Electronics and Communication Engineering from Jaypee Institute of Information Technology, I have developed a strong passion for software development and a desire to contribute to the ever-evolving technology landscape. My experience with various technologies such as React JavaScript, Node.js, Express, and data structures and algorithms has allowed me to develop a versatile skillset that I am eager to apply in real-world settings.

My interest in software development began when I was introduced to HTML and CSS during high school. Since then, I have immersed myself in learning various programming languages and frameworks, such as React. With React, I am able to build dynamic and interactive user interfaces, which is essential in creating visually appealing and responsive web applications.

Additionally, my knowledge of Node.js and Express has enabled me to develop server-side applications that are fast and efficient. These skills, combined with my knowledge of data structures and algorithms, have prepared me to tackle complex challenges in software development.

In my free time, I enjoy participating in coding challenges and working on personal projects to further hone my skills. I am also an active member of my college's programming club, where I have collaborated with my peers on projects and competitions.

As I continue to learn and grow in this field, I am excited about the possibilities that technology holds. I am eager to contribute to innovative projects and make a positive impact on society through software development.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro