import React from "react";
// import "./header.css";
import CTA from "./CTA";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello</h5>
        <h1>Tatiana Cherbaeva</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
