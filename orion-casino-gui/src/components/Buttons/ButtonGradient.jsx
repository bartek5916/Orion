import React from 'react';
import './ButtonGradient.css';

function ButtonGradient({width, height, color, text, textColor, onClick}) {
    const buttonStyle = {
        width: width,
        height: height,
        background: color,
        color: textColor,
    }

    return (
        <div className="button-gradient" style={buttonStyle} onClick={onClick}>{text}</div>
    );
}

export default ButtonGradient;