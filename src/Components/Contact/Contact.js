import React, { useState } from 'react';
import './Contact.css';

import { Mailto } from './Mailto';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub,
    faLinkedin,
    faGoogle
  } from "@fortawesome/free-brands-svg-icons";



export default function Contact() {


    return (
        <section className="contact" id="contact">
            <a href="https://github.com/loganed09" 
               className="github social">
               <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/loganed09/"
               className="linkedin social">
               <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <Mailto email="loganed09@gmail.com">
                <FontAwesomeIcon icon={faGoogle} size="2x" />
            </Mailto>
        </section>
    )
}