import React from "react";
import "./experience.css";
import { BsBookmarkCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Programming | Frameworks | Libraries</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                {/* <small className="text-light">ES5 / ES6</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>C#</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>OOP</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                {/* <small className="text-light">
                  Redux / React-Router / Redux Toolkit / Context API
                </small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>NodeJS</h4>
                {/* <small className="text-light">
                  Redux / React-Router / Redux Toolkit / Context API
                </small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML5</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS3</h4>
                {/* <small className="text-light">Flexbox / Grid / Sass</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Material UI</h4>
                {/* <small className="text-light">Flexbox / Grid / Sass</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Formik</h4>
                {/* <small className="text-light">Flexbox / Grid / Sass</small> */}
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience__backend">
          <h3>Development Utilities</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>GitHub / Git</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>VS Code</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Jira / Trello</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Heroku / Netlify</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Figma</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Firebase</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Chrome DevTools</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Debugger / Unit Test</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
