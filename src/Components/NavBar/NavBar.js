import React from 'react';
import './NavBar.css';

export class NavBar extends React.Component {
  render() {
    return (
    <nav>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <h2>Logan Edwards</h2>
        <a href="#contact">Contact</a>
        <a href="#">Something</a>
        <button class="mobile-id">
            <h2 class="mobile-id">LE</h2>
        </button>
    </nav>
    )
  }
}