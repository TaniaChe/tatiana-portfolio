import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { RiTwitterXLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer>
      <a href="#home" className="fooler__logo">
        Tatiana
      </a>

      <ul className="permalinks">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <GrInstagram />
        </a>
        <a href=" https://twitter.com/" target="_blank" rel="noreferrer">
          <RiTwitterXLine />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Tatiana Cherbaeva. All rights reserved</small>
      </div>
    </footer>
  );
}
