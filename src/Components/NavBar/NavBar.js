import React, { useState } from 'react';
import './NavBar.css';
import {Link} from 'react-scroll';

export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="navbar">
        <a className="navItem nitem1"><Link to="projects" spy={true} smooth={true}>Projects</Link></a>
        <a className="navItem nitem2" href="https://www.linkedin.com/in/loganed09/">LinkedIn</a>
        <a className="navItem nitem3" id="myName"><Link to="about" spy={true} smooth={true}>LOGAN EDWARDS</Link></a>
        <a className="navItem nitem4" href="https://github.com/loganed09">GitHub</a>
        <a className="navItem nitem5" ><Link to="contact" spy={true} smooth={true}>Contact</Link></a>
        <p className={`initials ${navbarOpen ? " hideInitials" : ""}`}>
            <a><Link to="about" spy={true} smooth={true}>LE</Link></a>
        </p>
        <div className="dropdown">
          <button className="mobile-id" onClick={handleToggle}>
              <i className={`${navbarOpen ? "cross fas fa-times" : "hamburger fas fa-bars"}`}></i>
          </button>
          <ul className={`dropdown-content ${navbarOpen ? " showMenu" : ""}`} onClick={handleToggle}>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="https://github.com/loganed09">GitHub</a>
            <a href="https://www.linkedin.com/in/loganed09/">LinkedIn</a>
          </ul>
        </div>
    </nav>
    )
}
