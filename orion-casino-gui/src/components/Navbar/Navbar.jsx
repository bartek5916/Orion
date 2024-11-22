import React from 'react';
import './Navbar.css';

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

                    </div>
                    <div className="navbar-center-right">
                        <button className="login-button">Zaloguj się</button>
                        <button className="signup-button">Rejestracja</button>
                    </div>
                    <div className="navbar-right-corner">
                        <div className="profile-logo">

                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;