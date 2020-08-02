import React from 'react';
import './Home.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Card from '../Card/Card';
import GraphicCard from '../GraphicCard/GraphicCard';
import posed from 'react-pose';

const Item = posed.div({
    enter: {x:0, opacity:1},
    exit: {x:-400, opacity:0}
})



const Home = () =>{
    return(
        <div className="screen">
            <Card>
                <div className="overlay"></div>
                <GraphicCard/>
                <div className="right">
                    <Nav/>
                    <Item className="name">
                        <h1>Akhil</h1>
                        <h1>Preet Singh</h1>
                    </Item>
                    <Footer/>
                </div>
            </Card>
        </div>
    )
}

export default Home;