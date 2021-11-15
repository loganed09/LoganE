import React, { useState } from 'react';
import './Projects.css';

export default function Projects() {
    const portfolioPic = require("../../resources/images/portfolioProjectPic.PNG");
    const plannerPic = require("../../resources/images/plannerPic.PNG");
    const stopWatchPic = require("../../resources/images/StopWatchPic.PNG");
    const excursionPic = require("../../resources/images/ExcursionPic.PNG");
    const ticTacToePic = require("../../resources/images/TicTacToePic.PNG");
    const tipCalcPic = require("../../resources/images/TipCalcPic.PNG");
    const jammingPic = require("../../resources/images/jamming.PNG");
    const ravPic = require("../../resources/images/ravenous.PNG");
    return (
        <section className="projects" id="projects">
            <h2>Projects</h2>
            <p className="projInfo">Click on project picture to view project.<br/>To access source code, click on "Code".</p>
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
                    <a href="https://loganed09.github.io/tipCalculator/"><img src={tipCalcPic.default} alt="" /></a>
                    <div className="project-text">
                        <p>Simple tip calculator made with React and CSS.</p>
                        <a href="https://github.com/loganed09/tipCalculator">Code</a>
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
                <div className="project7 project">
                    <h3>Jammin</h3>
                    <a href="https://loganed09.github.io/Jamming/"><img src={jammingPic.default} alt="" /></a>
                    <div className="project-text">
                        <p>React application made with React classes. This project uses the Spotify API to create and save playlists.</p>
                        <a href="https://github.com/loganed09/Jamming">Code</a>
                    </div>
                </div>
                <div className="project8 project">
                    <h3>Ravenous</h3>
                    <a href="https://loganed09.github.io/ravenous/"><img src={ravPic.default} alt="" /></a>
                    <div className="project-text">
                        <p>React application made with Hooks and React Functions. This project uses the Yelp API to search for food by name and location. Also, has the ability to sort the results.</p>
                        <a href="https://github.com/loganed09/ravenous">Code</a>
                    </div>
                </div>
            </div>
        </section>
    )
}