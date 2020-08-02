import React from 'react';
import './Card.css';

const Card = ({children}) =>{
    return(
        <div className="outerCard">
            {children}
        </div>
    )
}

export default Card;