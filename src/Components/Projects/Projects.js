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
            <p className="projInfo">Click on picture to go to view project.</p>
            <div className="project-items">
                <div className="project1 project">
                    <h3>This Project</h3>
                    <img src="" alt="" />
                    <div className="project-text">
                        <p>This portfolio project was created using React and CSS.</p>
                        <a href="https://github.com/loganed09/LoganE">Code</a>
                    </div>
                </div>
                <div className="project2 project">
                    <h3>Tic Tac Toe</h3>
                    <a href="https://loganed09.github.io/tictactoe/"><img src={ticTacToePic.default} alt="" /></a>
                    <div className="project-text">
                        <p>Created this project using simple HTML and CSS. Along with JavaScript code to create the game.</p>
                        <a href="https://github.com/loganed09/tictactoe">Code</a>
                    </div>
                </div>
                <div className="project3 project">
                    <h3>Mock Up Website</h3>
                    <a href="https://loganed09.github.io/-excursion/"><img src={excursionPic.default} alt="" /></a>
                    <div className="project-text">                        
                        <p>This CodeCademy project is a mock up website. CodeCademy gave me the blueprints to construct it into a static website.</p>
                        <a href="https://github.com/loganed09/-excursion">Code</a>
                    </div>
                </div>
                <div className="project4 project">
                    <h3>StopWatch</h3>
                    <a href="https://loganed09.github.io/stopWatch/"><img src={stopWatchPic.default} alt="" /></a>
                    <div className="project-text">
                        <p>Simple Stop Watch application using HTML, CSS, and JavaScript.</p>
                        <a href="https://github.com/loganed09/stopWatch">Code</a>
                    </div>
                </div>
                <div className="project5 project">
                    <h3>Tip Calculator</h3>
                    <a href="https://loganed09.github.io/TipCalc/"><img src={tipCalcPic.default} alt="" /></a>
                    <div className="project-text">
                        <p>Simple tip calculator made with React and CSS.</p>
                        <a href="https://github.com/loganed09/TipCalc">Code</a>
                    </div>
                </div>
                <div className="project6 project">
                    <h3>React Planner</h3>
                    <a href="https://loganed09.github.io/planner/"><img src={plannerPic.default} alt="" /></a>
                    <div className="project-text">
                        <p>Simple planner made with React.</p>
                        <a href="https://github.com/loganed09/planner">Code</a>
                    </div>
                </div>
            </div>
        </section>
    )
}