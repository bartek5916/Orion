import React from 'react';
import './Navbar.css';
import ButtonGradient from "../Buttons/ButtonGradient";
import NormalButton from "../Buttons/NormalButton";
import RoundedButton from "../Buttons/RoundedButton";

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-left-corner">
                        <div className="orion-logo">
                            <img src="/assets/images/navbar/orion-logo.png" alt="orion-icon"/>
                        </div>
                        <div className="orion-link">
                            ORION <br/>
                            KASYNO
                        </div>
                    </div>
                    <div className="navbar-center-left">
                        <input type="text" className="search-input" placeholder="Wyszukaj"></input>
                    </div>
                    <div className="navbar-center-right">
                        <NormalButton text="Zaloguj się"/>
                        <ButtonGradient text="Rejestracja"/>
                    </div>
                    <div className="navbar-right-corner">
                        <RoundedButton src="/assets/images/navbar/profile-picture.png"/>
                        <RoundedButton src="/assets/images/navbar/settings-icon2.png"/>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;