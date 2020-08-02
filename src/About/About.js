import React from 'react';
import './About.css';
import StyledCard from '../StyledCard/StyledCard';
import NavigationBar from '../NavigationBar/NavigationBar';
import Card from '../Card/Card';
import {Link} from 'react-router-dom';
import posed from 'react-pose';
import { RiCodeSSlashLine } from "react-icons/ri";
import { FaBrain } from "react-icons/fa";
import {BsChevronCompactRight} from "react-icons/bs"

const P = posed.p({
    enter: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 }
  });

const Container = posed.div({
    enter: { staggerChildren: 50 }
});

const About = () =>{
    return(
        <Container className="screen">
            <NavigationBar/>
            <Card>
                <div className="overlay"></div>
                <StyledCard title="Who am I?">
                    <div className="content">
                        <P>I am a software developer who has developed products for enterprise clients such as Westpac, Ford, and Foxconn, as well as many venture-backed businesses. I specialize in building applications specific to the business needs of my clients. I have done work in software development,front-end/back-end web, database/server management, graphic design, and Machine Learning applications development.</P>
                        <div className="lowerContent">
                            <P>Know more about my skills <span>&gt;</span></P>
                            <div className="skillIcons">
                                <Link style={{ color: 'inherit',textDecoration: 'inherit', display: 'contents'}} to="/webskills">
                                    <span className="icon">
                                        <RiCodeSSlashLine/>
                                        <p>Web Dev</p>
                                    </span>
                                </Link>
                                <Link style={{ color: 'inherit',textDecoration: 'inherit', display: 'contents'}} to="/mlskills">
                                    <span className="icon">
                                        <FaBrain/>
                                        <p>Machine Learning</p>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </StyledCard>
            </Card>
        </Container>




        
    )
}

export default About;