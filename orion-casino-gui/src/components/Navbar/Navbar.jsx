import './Navbar.css';
import React, { useState } from "react";
import ButtonGradient from "../Buttons/ButtonGradient";
import NormalButton from "../Buttons/NormalButton";
import RoundedButton from "../Buttons/RoundedButton";
import SearchBar from "../SearchBar/SearchBar";
import LoginPanel from "../Login/LoginPanel";
import SignUpPanel from "../SignUp/SignUpPanel";

function Navbar() {
    const [isLoginVisible, setLoginVisible] = useState(false);
    const [isSignUpVisible, setSignUpVisible] = useState(false);

    const handleLoginClick = () => {
        setLoginVisible(true);
    };
    const handleLoginCLose = () => {
        setLoginVisible(false);
    };

    const handleSignUpClick = () => {
        setSignUpVisible(true);
    };
    const handleSignUpClose = () => {
        setSignUpVisible(false);
    };

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
                        <SearchBar width="300px" height="40px" backgroundColor="#220d33" textColor="#9e9a9a" placeholder="Wyszukaj" icon="/assets/images/navbar/search-icon.png"/>
                    </div>
                    <div className="navbar-center-right">
                        <NormalButton text="Zaloguj się" onClick={handleLoginClick}/>
                        <ButtonGradient width="134px" height="42px" color="linear-gradient(90deg, #ce63f3, #6D0DB6FF)" text="Rejestracja" onClick={handleSignUpClick}/>
                    </div>
                    <div className="navbar-right-corner">
                        <RoundedButton src="/assets/images/navbar/profile-picture.png"/>
                        <RoundedButton src="/assets/images/navbar/settings-icon2.png"/>
                    </div>
                </div>
                {isLoginVisible && <LoginPanel onClose={handleLoginCLose} />}
                {isSignUpVisible && <SignUpPanel onClose={handleSignUpClose} />}
            </nav>
        </>
    );
}

export default Navbar;