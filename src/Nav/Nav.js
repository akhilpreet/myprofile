import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import posed from "react-pose";

const ListContainer = posed.ul({
    enter: { staggerChildren: 50 },
    exit: { staggerChildren: 20, staggerDirection: -1 }
});

const Item = posed.li({
    enter: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 }
});

const Container = posed.div({
    enter: { staggerChildren: 50 }
});


const Nav = () =>{
    return(
        <Container className="navContainer">
            <ListContainer>
                <Item><Link style={{ color: 'inherit',textDecoration: 'inherit' }} to="/">Home</Link></Item>
                <Item><Link style={{ color: 'inherit',textDecoration: 'inherit' }} to="/about">About</Link></Item>
                <Item><Link style={{ color: 'inherit',textDecoration: 'inherit' }} to="/work">Work</Link></Item>
                <Item><Link style={{ color: 'inherit',textDecoration: 'inherit' }} to="/contact">Contact</Link></Item>
            </ListContainer>
        </Container>
    )
}

export default Nav;