import React, { useState } from 'react';
import './About.css';


export default function About() {
    let selfImage = require("../../resources/images/Me.jpg");
    let nobgSelf = require("../../resources/images/me-nobg.png");
    let pianoImage = require('../../resources/images/piano.jpg');
    return (
        <section className="about-me" id="about">
            <div className="about-text">
                <h2>My name is Logan Edwards.</h2>
                <p>I play the piano. I love comic books. I am an aspiring Web Developer. Below you will find some of my projects.</p>
            </div>
            <div className="about-me-pics">
               <img className="meImg" src={selfImage.default} />
               <img className="pianoImg" src={pianoImage.default} alt="piano" />
               <img className="nobgSelf" src={nobgSelf.default} alt="nobgMe" />
            </div>
        </section>
    )
}