import React from "react";
import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { RiContactsBookLine } from "react-icons/ri";
import { MdDesignServices } from "react-icons/md";
import { useState } from "react";

export default function Navbar() {
  const [activeNavbar, setActiveNavbar] = useState("#home");
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNavbar("#home")}
        className={activeNavbar === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNavbar("#about")}
        className={activeNavbar === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNavbar("#experience")}
        className={activeNavbar === "#experience" ? "active" : ""}
      >
        <MdDesignServices />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNavbar("#portfolio")}
        className={activeNavbar === "#portfolio" ? "active" : ""}
      >
        <MdDeveloperMode />
      </a>
      <a
        href="#contacts"
        onClick={() => setActiveNavbar("#contacts")}
        className={activeNavbar === "#contacts" ? "active" : ""}
      >
        <RiContactsBookLine />
      </a>
    </nav>
  );
}
