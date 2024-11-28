import React from 'react';
import './MainContent.css'
import ButtonGradient from "../Buttons/ButtonGradient";

function MainContent() {
    return (
        <div className="main-content-panel">
            <div className="main-content-container">
                <div className="free-bonus-panel">
                    <img className="free-bonus-picture" src="/assets/images/MainPanel/orion.jpg" alt="free-bonus-orion-picture"/>
                    <div className="free-spin-main-panel-button">
                        <ButtonGradient width="300px" height="80px" color="linear-gradient(90deg, #F3D19E, #F7F3FF)" text="FREE SPIN" textColor="#2C2C2C"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;