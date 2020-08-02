import React from 'react';
import './Footer.css';
import {RiLinkedinBoxLine, RiGithubLine} from 'react-icons/ri';


const Footer = () =>{
    return(
        <div className="footerContainer">
            <p>developed by akhi!</p>
            <div className="footerRight">
                <a href="https://www.linkedin.com/in/akhilpreetsingh/" title="Linkedin">
                    <RiLinkedinBoxLine/>
                </a>
                <a href="https://github.com/akhilpreet" title="Github">
                    <RiGithubLine/>
                </a>
            </div>
        </div>
    )
}

export default Footer;