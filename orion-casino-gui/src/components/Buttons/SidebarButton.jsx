import React from 'react';
import './SidebarButton.css';
import RoundedButton from "./RoundedButton";

function SidebarButton({ icon, text }) {
    return (
        <div className="sidebar-button">
            <div className="custom-rounded-button">
                <RoundedButton src={icon}/>
            </div>
            <div className="text">{text}</div>
        </div>
    );
}

export default SidebarButton;
