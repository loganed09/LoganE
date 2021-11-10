import React, { useState } from 'react';
import './Projects.css';

export default function Projects() {
    const portfolioPic = require("../../resources/images/portfolioProjectPic.PNG");
    const plannerPic = require("../../resources/images/plannerPic.PNG");
    const stopWatchPic = require("../../resources/images/StopWatchPic.PNG");
    const excursionPic = require("../../resources/images/ExcursionPic.PNG");
    const ticTacToePic = require("../../resources/images/TicTacToePic.PNG");
    const tipCalcPic = require("../../resources/images/TipCalcPic.PNG");
    return (
        <section className="projects" id="projects">
            <h2>Projects</h2>
            <div className="project-items">
                <div className="project1 project">
                    <h3>This Project</h3>
                    <img src="" alt="" />
                    <div className="project-text">
                        <p>This portfolio project was created using React and CSS.</p>
                    </div>
                </div>
                <div className="project2 project">
                    <h3>Tic Tac Toe</h3>
                    <img src={ticTacToePic.default} alt="" />
                    <div className="project-text">
                        <p>Created this project using simple HTML and CSS. Along with JavaScript code to create the game.</p>
                    </div>
                </div>
                <div className="project3 project">
                    <h3>Mock Up Website</h3>
                    <img src={excursionPic.default} alt="" />
                    <div className="project-text">                        
                        <p>This CodeCademy project is a mock up website. CodeCademy gave me the blueprints to construct it into a static website.</p>
                    </div>
                </div>
                <div className="project4 project">
                    <h3>StopWatch</h3>
                    <img src={stopWatchPic.default} alt="" />
                    <div className="project-text">
                        <p>Simple Stop Watch application using HTML, CSS, and JavaScript.</p>
                    </div>
                </div>
                <div className="project5 project">
                    <h3>Tip Calculator</h3>
                    <img src={tipCalcPic.default} alt="" />
                    <div className="project-text">
                        <p>Simple tip calculator made with React and CSS.</p>
                    </div>
                </div>
                <div className="project6 project">
                    <h3>React Planner</h3>
                    <img src={plannerPic.default} alt="" />
                    <div className="project-text">
                        <p>Planner made with React.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}