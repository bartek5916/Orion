import React from 'react';
import './NormalButton.css';

function NormalButton({ text, onClick }) {
    return (
        <div className="normal-button" onClick={onClick}>{text}</div>
    );
}

export default NormalButton;