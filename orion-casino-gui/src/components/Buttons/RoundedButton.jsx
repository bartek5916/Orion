import React from 'react';
import './RoundedButton.css';

function RoundedButton({src}) {
    return (
        <div className="rounded-button">
            <button className="img-button">
                <img src={src} alt="img-icon"/>
            </button>
        </div>
    );
}

export default RoundedButton;