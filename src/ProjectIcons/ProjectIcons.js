import React from 'react';
import './ProjectIcons.css';

import posed from 'react-pose';

const Pop = posed.div({
    enter:{
        opacity: 0.7},
    exit:{
        opacity: 0
    }
});

class ProjectIcons extends React.Component{
    constructor(props){
        super(props);
        this.wrapperRef = React.createRef();
    }

    makeFullScreen(){
        const wrapper = this.wrapperRef.current;
        wrapper.classList.toggle('screenOpen')
    }

    render(){
        return(
            <Pop ref = {this.wrapperRef} className="project" onClick={()=>this.makeFullScreen()}>
                <a href={this.props.link} target="_blank">Site link</a>
                <div></div>
            </Pop>
        )
    }
}

export default ProjectIcons;