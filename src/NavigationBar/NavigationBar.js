import React from 'react';
import './NavigationBar.css';
import {Link} from 'react-router-dom';
import posed from "react-pose";

const ListContainer = posed.ul({
    enter: { staggerChildren: 50 },
    exit: { staggerChildren: 20, staggerDirection: -1 }
});

const Item = posed.li({
    enter: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 }
});

const Container = posed.div({
    enter: { staggerChildren: 50 }
});

const NavigationBar = () =>{
    return(
        <Container className="NavigationContainer">
            <ListContainer>
                <Item><Link style={{ color: 'inherit',textDecoration: 'inherit' }} to="/">Home</Link></Item>
                <Item><Link style={{ color: 'inherit',textDecoration: 'inherit' }} to="/about">About</Link></Item>
                <Item><Link style={{ color: 'inherit',textDecoration: 'inherit' }} to="/work">Work</Link></Item>
                <Item><Link style={{ color: 'inherit',textDecoration: 'inherit' }} to="/contact">Contact</Link></Item>
            </ListContainer>
        </Container>
    )
}

export default NavigationBar;