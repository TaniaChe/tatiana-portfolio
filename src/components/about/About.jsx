import React from "react";
import "./about.css";
import ME from "../../assets/about-picture.jpg";
import { RiAwardLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about-selfy"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiAwardLine className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>
            <article className="about__card">
              <AiOutlineFundProjectionScreen className="about__icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          <p>
            I am a self-motivated, effective, and professional software
            engineer with 2 years of experience specializing in
            JavaScript, C#, React & NodeJS. I am open to learning & interested in
            adding additional languages and skills to my existing knowledge. I
            am a dedicated team player who believes that the collective effort
            of a skilled and motivated group can achieve remarkable results.
				<br/>
				Thank you for visiting my website!
          </p>
			 <a href="#contacts" className="btn btn-pimary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default About;
