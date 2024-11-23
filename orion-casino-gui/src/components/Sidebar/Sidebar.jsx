import React from 'react';
import './Sidebar.css';
import SidebarButton from "../Buttons/SidebarButton";
import ButtonGradient from "../Buttons/ButtonGradient";

function Sidebar() {
    return (
        <>
            <nav className="sidebar">
                <div className="sidebar-container">

                    <div className="free-spin-button">
                        <img className="free-spin-icon" src="/assets/images/sidebar/free-spin.png"
                             alt="freespin-icon"></img>
                        <div className="free-spin-text">FREE SPIN</div>
                        <img className="free-spin-icon" src="/assets/images/sidebar/free-spin.png"
                             alt="freespin-icon"></img>
                    </div>

                    <div className="main-tiles">
                        <ol>
                            <div className="popular-games">
                                <SidebarButton text="Popularne gry" icon="/assets/images/sidebar/popular-icon.png"/>
                            </div>
                            <div className="new-games">
                                <SidebarButton text="Nowe gry" icon="/assets/images/sidebar/new-games.png"/>
                            </div>
                            <div className="facourite-games">
                                <SidebarButton text="Ulubione gry" icon="/assets/images/sidebar/favourite-icon.png"/>
                            </div>
                            <div className="deposit">
                                <SidebarButton text="Depozyt" icon="/assets/images/sidebar/deposit-icon.png"/>
                            </div>
                            <div className="leaderboard">
                                <SidebarButton text="Ranking" icon="/assets/images/sidebar/ranking-icon.png"/>
                            </div>
                            <div className="about-us">
                                <SidebarButton text="O nas" icon="/assets/images/sidebar/about-us.png"/>
                            </div>
                        </ol>
                    </div>

                    <div className="bottom-tiles">
                        <div className="support-button">
                            <SidebarButton text="Wsparcie" icon="/assets/images/sidebar/faq-icon.png"/>
                        </div>
                        <div className="deposit-button">
                            <ButtonGradient width="300px" height="80px"
                                            color="linear-gradient(90deg, #ce63f3, #6D0DB6FF)" text="DEPOZYT"/>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Sidebar;