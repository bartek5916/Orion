import React from 'react';
import './ButtonGradient.css';

function ButtonGradient({width, height, color, text, textColor}) {
    const buttonStyle = {
        width: width,
        height: height,
        background: color,
        color: textColor,
    }

    return (
        <div className="button-gradient" style={buttonStyle}>{text}</div>
    );
}

export default ButtonGradient;