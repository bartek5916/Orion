import React from 'react';
import './RoundedButton.css';

function RoundedButton(props) {
    return (
        <div className="rounded-button">
            <button className="img-button">
                <img src={props.src} alt="img-icon"/>
            </button>
        </div>
    );
}

export default RoundedButton;