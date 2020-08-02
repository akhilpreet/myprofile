import React from 'react';
import './Contact.css';
import StyledCard from '../StyledCard/StyledCard';
import NavigationBar from '../NavigationBar/NavigationBar';
import Card from '../Card/Card';
import posed from 'react-pose';

const Text = posed.p({
    enter:{
        x:0,
        opacity:1
    },
    exit:{
        x:100,
        opacity:0
    }
})

const Contact = () =>{
    return (
        <div className="screen">
            <NavigationBar/>
            <Card>
                <div className="overlay"></div>
                <StyledCard title="Contact Me">
                    <div className="cardWrapper">
                        <Text>Reach out to me at:</Text>
                        <Text>preetakhil@gmail.com</Text>
                        <Text>OR</Text>
                        <Text>+61-469879757</Text>
                    </div>
                </StyledCard>
            </Card>
        </div>
    )
}

export default Contact;