import React from 'react';
import './WebSkills.css';
import StyledCard from '../StyledCard/StyledCard';
import NavigationBar from '../NavigationBar/NavigationBar';
import Card from '../Card/Card';
import posed from 'react-pose';
import { GrHtml5, GrCss3, GrJs, GrReactjs, GrNode } from "react-icons/gr";
import {RiAngularjsLine} from "react-icons/ri";

const InDiv = posed.div({
    enter: { x: 0 },
    exit:{x:500}
});

const WebSkills = () =>{
    return(
        <div className="screen">
            <NavigationBar/>
            <Card>
                <div className="overlay"></div>
                <StyledCard title="Web Development">
                    <div className="iconsWrapper">
                        <span className="skicon">
                            <GrHtml5/>
                            <p>HTML</p>
                        </span>
                        <span className="skicon">
                            <GrCss3/>
                            <p>CSS</p>
                        </span>
                        <span className="skicon">
                            <GrJs/>
                            <p>Javascript</p>
                        </span>
                        <span className="skicon">
                            <GrReactjs/>
                            <p>ReactJS</p>
                        </span>
                        <span className="skicon">
                            <RiAngularjsLine/>
                            <p>AngularJS</p>
                        </span>
                        <span className="skicon">
                            <GrNode/>
                            <p>NodeJS</p>
                        </span>
                    </div>
                </StyledCard>
            </Card>
        </div>
    )
}

export default WebSkills;