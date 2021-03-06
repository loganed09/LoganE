import React, { useState } from 'react';
import './About.css';


export default function About() {
    let selfImage = require("../../resources/images/Me.jpg");
    // let nobgSelf = require("../../resources/images/me-nobg.png");
    // let pianoImage = require('../../resources/images/piano.jpg');
    return (
        <section className="about-me" id="about">
            <div className="aboutContainer">
                <div className="about-text">
                    <h2>My name is Logan Edwards.</h2>
                    <p>I play the piano. I love comic books. I graduated from Western Carolina University in 2018 with a Bachelors in Electrical and Computer Engineering Technologies. I am a Web Developer. Below you will find some of my projects.</p>
                </div>
                <img className="selfImage" src={selfImage.default} alt="selfImage" />
            </div>
        </section>
        

    )
}