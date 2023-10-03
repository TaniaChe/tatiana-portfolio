import React from "react";
import "./portfolio.css";
import IMG from "../../assets/coming-soon.jpeg";

const data = [
  {
    id: 1,
    image: IMG,
    title: "This is my work",
    github: "https://github.com/TaniaChe/react-router-recipes",
    demo: "https://taniache.github.io/react-router-recipes/",
  },
  {
    id: 2,
    image: IMG,
    title: "This is my work",
    github: "https://github.com/TaniaChe/react-router-recipes",
    demo: "https://taniache.github.io/react-router-recipes/",
  },
  {
    id: 3,
    image: IMG,
    title: "This is my work",
    github: "https://github.com/TaniaChe/react-router-recipes",
    demo: "https://taniache.github.io/react-router-recipes/",
  },
  {
    id: 4,
    image: IMG,
    title: "This is my work",
    github: "https://github.com/TaniaChe/react-router-recipes",
    demo: "https://taniache.github.io/react-router-recipes/",
  },
  {
    id: 5,
    image: IMG,
    title: "This is my work",
    github: "https://github.com/TaniaChe/react-router-recipes",
    demo: "https://taniache.github.io/react-router-recipes/",
  },
  {
    id: 6,
    image: IMG,
    title: "This is my work",
    github: "https://github.com/TaniaChe/react-router-recipes",
    demo: "https://taniache.github.io/react-router-recipes/",
  },
];
export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
