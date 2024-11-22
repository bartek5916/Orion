import React from 'react';
import './SidebarButton.css';

function SidebarButton(props) {
    return (
        <div className="sidebar-button">{props.text}</div>
    );
}

export default SidebarButton;