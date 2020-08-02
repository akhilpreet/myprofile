import React from 'react';
import './Work.css';
import StyledCard from '../StyledCard/StyledCard';
import NavigationBar from '../NavigationBar/NavigationBar';
import Card from '../Card/Card';


import ProjectIcons from '../ProjectIcons/ProjectIcons';

const About = () =>{
    return(
        <div className="screen">
            <NavigationBar/>
            <Card>
                <div className="overlay"></div>
                <StyledCard title="Projects?">
                    <div className="projectWrapper">
                        <div className="projectContainer">
                            <ProjectIcons link="https://darkstudio.in/"/>
                            <ProjectIcons link="https://akhilpreet.github.io/"/>
                            <ProjectIcons link="http://matrixdesignworks.in/"/>
                            <ProjectIcons link="http://aurainteriorz.com/"/>
                            <ProjectIcons/>
                            <ProjectIcons/>
                        </div>
                    </div>
                </StyledCard>
            </Card>
        </div>
        
    )
}

export default About;