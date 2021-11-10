import React, { useState } from 'react';
import './Projects.css';

export default function Projects() {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className="project-items">
                <div className="project1 project">
                    <img></img>
                    <div className="project-text">
                        <h4>This Project</h4>
                        <p>This portfolio project was created using React and CSS.</p>
                    </div>
                </div>
                <div className="project2 project">
                    <img></img>
                    <h4>Tic Tac Toe</h4>
                    <p>Created this project using simple HTML and CSS. Along with JavaScript code to create the game.</p>
                </div>
                <div className="project3 project">
                    <img></img>
                    <h4>Mock Up Website</h4>
                    <p>This CodeCademy project is a mock up website. CodeCademy gave me the blueprints to construct it into a static website.</p>
                </div>
                <div className="project4 project">
                    <img></img>
                    <h4>Find Your Hat</h4>
                    <p>Using JavaScript, I constructed a small terminal game that gives the player the objective to get the "^" to the end without falling into the pits. This was made by using class structures.</p>
                </div>
            </div>
        </section>
    )
}