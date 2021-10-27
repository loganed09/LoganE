import React, { useState } from 'react';
import './NavBar.css';


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
        <a className="navItem nitem1" href="#projects">Projects</a>
        <h2 className="navItem nitem2">LOGAN EDWARDS</h2>
        <a className="navItem nitem3" href="#contact">Contact</a>
        <p className={`initials ${navbarOpen ? " hideInitials" : ""}`}>
            <a href="#about">LE</a>
        </p>
        <div className="dropdown">
          <button className="mobile-id" onClick={handleToggle}>
              <i className="fas fa-bars"></i>
          </button>
          <ul className={`dropdown-content ${navbarOpen ? " showMenu" : ""}`}>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </ul>
        </div>
    </nav>
    )
}
