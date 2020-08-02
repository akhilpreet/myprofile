import React from 'react';
import './App.css';
import {Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Work from './Work/Work';
import Contact from './Contact/Contact';
import WebSkills from './WebSkills/WebSkills';
import MlSkills from './MlSkills/MlSkills'
import NavigationBar from './NavigationBar/NavigationBar';
import posed, { PoseGroup } from "react-pose";

const RoutesContainer = posed.div({
  enter: {
    opacity: 1,
    beforeChildren: true
  },
  exit: { opacity: 0 }
});

const App = () => (
  <Route
    render={({ location }) => (
        <div>
          {location.pathname !== "/" && <NavigationBar/>}
          <PoseGroup>
            <RoutesContainer key={location.pathname}>
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/work" component={Work} />
                <Route path="/contact" component={Contact} />
                <Route path="/webskills" component={WebSkills}/>
                <Route path="/mlskills" component={MlSkills}/>
              </Switch>
            </RoutesContainer>
          </PoseGroup>
        </div>
    )}
  />
); 

export default App;