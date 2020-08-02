import React from 'react';
import './StyledCard.css';


const StyledCard = ({title, children}) =>{
    return(
        <div className="container">
            <div className="leftContainer">
                <div className="inner"></div>
            </div>
            <h1 className="highlight">{title}</h1>
            {children}
        </div>
    )
}

export default StyledCard;