import React from 'react';
import './MlSkills.css';
import StyledCard from '../StyledCard/StyledCard';
import NavigationBar from '../NavigationBar/NavigationBar';
import Card from '../Card/Card';
import posed from 'react-pose';
import { FaPython } from "react-icons/fa";
import {DiMysql, DiMongodb} from 'react-icons/di';
import {AiOutlineConsoleSql} from "react-icons/ai"


const InDiv = posed.div({
    enter: { x: 0 },
    exit:{x:500}
});

const MlSkills = () =>{
    return(
        <div className="screen">
            <NavigationBar/>
            <Card>
                <div className="overlay"></div>
                <StyledCard title="Machine Learning">
                    <div className="iconsWrapper">
                        <span className="skicon">
                            <FaPython/>
                            <p>Python</p>
                        </span>
                        <span className="skicon">
                            <DiMysql/>
                            <p>MySQL</p>
                        </span>
                        <span className="skicon">
                            <AiOutlineConsoleSql/>
                            <p>SQL</p>
                        </span>
                        <span className="skicon">
                            <DiMongodb/>
                            <p>MongoDB</p>
                        </span>
                    </div>
                </StyledCard>
            </Card>
        </div>
    )
}

export default MlSkills;