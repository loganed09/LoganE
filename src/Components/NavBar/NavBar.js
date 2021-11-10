import React, { useState } from 'react';
import './NavBar.css';
import {Link} from 'react-scroll';


// export class NavBar extends React.Component {
  
//   const [navbarOpen, setNavbarOpen] = useState(false);

//   render() {
//     return (
//     <nav className="navbar">
//         <a href="#about">About Me</a>
//         <a href="#projects">Projects</a>
//         <h2>Logan Edwards</h2>
//         <a href="#contact">Contact</a>
//         <a href="#">Something</a>
//         <div className="dropdown">
//           <button className="mobile-id" onClick="dropDown()">
//               <h2 className="mobile-id">LE</h2>
//           </button>
//           <div className="dropdown-content">
//             <a href="#about">About Me</a>
//             <a href="#projects">Projects</a>
//             <a href="#contact">Contact</a>
//             <a href="#">Something</a>
//           </div>
//         </div>
//     </nav>
//     )
//   }
// }


export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="navbar">
        <a className="navItem nitem1"><Link to="projects" spy={true} smooth={true}>Projects</Link></a>
        <a className="navItem nitem2" href="https://www.linkedin.com/in/loganed09/">LinkedIn</a>
        <a className="navItem nitem3 myName"><Link to="about" spy={true} smooth={true}>LOGAN EDWARDS</Link></a>
        <a className="navItem nitem4" href="https://github.com/loganed09">GitHub</a>
        <a className="navItem nitem5" ><Link to="contact" spy={true} smooth={true}>Contact</Link></a>
        <p className={`initials ${navbarOpen ? " hideInitials" : ""}`}>
            <a><Link to="about" spy={true} smooth={true}>LE</Link></a>
        </p>
        <div className="dropdown">
          <button className="mobile-id" onClick={handleToggle}>
              <i className="fas fa-bars"></i>
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
