import React from "react";
import "./portfolio.css";
import IMG from "../../assets/coming-soon.jpeg";
import IMG1 from "../../assets/recipes.png";
import IMG2 from '../../assets/weather-app.png'
import IMG3 from "../../assets/book-list.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Worldwide Recipes",
    github: "https://github.com/TaniaChe/react-router-recipes",
    demo: "https://taniache.github.io/react-router-recipes/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Weather App",
    github: "https://github.com/TaniaChe/weather-app",
    demo: "https://weather-app-tatiana.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Book List Project",
    github: "https://github.com/TaniaChe/book-list",
    demo: "https://book-library-list.netlify.app/",
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
