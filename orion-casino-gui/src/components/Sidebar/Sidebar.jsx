import React from 'react';
import './Sidebar.css';
import SidebarButton from "../Buttons/SidebarButton";

function Sidebar() {
    return (
        <>
            <nav className="sidebar">
                <div className="sidebar-container">
                    <div className="main-tiles">
                        <ol>
                            {/*<SidebarButton text="Sloty"/>
                            <SidebarButton text="Depozyt"/>*/}
                        </ol>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Sidebar;