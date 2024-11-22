import React from 'react';
import './SidebarButton.css';

function SidebarButton({ icon, text }) {
    return (
        <div className="sidebar-button">
            <div className="icon">{icon}</div>
            <div className="text">{text}</div>
        </div>
    );
}

export default SidebarButton;
