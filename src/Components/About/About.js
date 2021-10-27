import React, { useState } from 'react';
import './About.css';


export default function About() {
    return (
        <div className="about-me">
            <h2>I'm Logan, and I like to code and stuff</h2>

            <p>My name is Logan Edwards. I play the piano. I love comic books. I am an aspiring Web Developer. I've made some things. I plan to make more. <b>A lot</b> more. </p>
            <div className="about-me-pics">
                <img className="meImg" src="./Me.jpg" alt="Picture of Logan" />
                {/* <img className="pianoImg" src="" alt="piano" /> */}
            </div>
        </div>
    )
}