import React from 'react';
import './ButtonGradient.css';

function ButtonGradient(props) {
    return (
        <div className="button-gradient">{props.text}</div>
    );
}

export default ButtonGradient;