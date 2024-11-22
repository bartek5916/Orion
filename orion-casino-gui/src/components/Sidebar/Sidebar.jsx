import React from 'react';
import './Sidebar.css';
import SidebarButton from "../Buttons/SidebarButton";
import ButtonGradient from "../Buttons/ButtonGradient";

function Sidebar() {
    return (
        <>
            <nav className="sidebar">
                <div className="sidebar-container">
                    <div className="main-tiles">
                        <ol>
                            <SidebarButton text="O nas" icon="/assets/images/sidebar/about-us.png"/>
                        </ol>
                    </div>

                    <div className="support-button">
                        <SidebarButton text="Support"/>
                    </div>

                    <div className="deposit-button">
                        <ButtonGradient text="Depozyt"/>
                    </div>

                </div>
            </nav>
        </>
    );
}

export default Sidebar;