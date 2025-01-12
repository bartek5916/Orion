import './Navbar.css';
import React, {useState} from "react";
import {useAuth} from "../../../api/AuthContext";
import ButtonGradient from "../../Buttons/ButtonGradient";
import NormalButton from "../../Buttons/NormalButton";
import RoundedButton from "../../Buttons/RoundedButton";
import SearchBar from "../SearchBar/SearchBar";
import LoginPanel from "../../Authorization/Login/LoginPanel";
import SignUpPanel from "../../Authorization/SignUp/SignUpPanel";
import {Link} from "react-router-dom";

function Navbar() {
    const [isLoginVisible, setLoginVisible] = useState(false);
    const [isSignUpVisible, setSignUpVisible] = useState(false);
    const [isSettingsVisible, setSettingsVisible] = useState(false);

    const handleLoginClick = () => {
        setLoginVisible(true);
        document.body.style.overflow = 'hidden';
    };
    const handleLoginCLose = () => {
        setLoginVisible(false);
        document.body.style.overflow = 'auto';
    };

    const handleSignUpClick = () => {
        setSignUpVisible(true);
        document.body.style.overflow = 'hidden';
    };
    const handleSignUpClose = () => {
        setSignUpVisible(false);
        document.body.style.overflow = 'auto';
    };

    const handleSettingsClick = () => {
        setSettingsVisible(true);
        document.body.style.overflow = 'hidden';
    };
    const handleSettingsClose = () => {
        setSettingsVisible(false);
        document.body.style.overflow = 'auto';
    };

    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div className="navbar-left-corner">
                            <div className="orion-logo">
                                <img src="/assets/images/navbar/orion-logo.png" alt="orion-icon"/>
                            </div>
                            <div className="orion-link">
                                ORION <br/>
                                KASYNO
                            </div>
                        </div>
                    </Link>
                    <div className="navbar-center-left">
                        <SearchBar width="300px" height="40px" backgroundColor="#220d33" textColor="#9e9a9a"
                                   placeholder="Wyszukaj" icon="/assets/images/navbar/search-icon.png"/>
                    </div>
                    <div className="navbar-center-right">
                        {user ? (
                            <>
                                <NormalButton text={user.balance}/>
                                <ButtonGradient
                                    width="134px"
                                    height="42px"
                                    color="linear-gradient(90deg, #ce63f3, #6D0DB6FF)"
                                    text="Wyloguj"
                                    onClick={handleLogout}
                                />
                            </>
                        ) : (
                            <>
                                <NormalButton text="Zaloguj się" onClick={handleLoginClick}/>
                                <ButtonGradient
                                    width="134px"
                                    height="42px"
                                    color="linear-gradient(90deg, #ce63f3, #6D0DB6FF)"
                                    text="Rejestracja"
                                    onClick={handleSignUpClick}
                                />
                            </>
                        )}
                    </div>
                    <div className="navbar-right-corner">
                        <Link to="/profile">
                            <RoundedButton src="/assets/images/navbar/profile-picture.png"/>
                        </Link>
                        <RoundedButton src="/assets/images/navbar/settings-icon2.png"/>
                    </div>
                </div>
                {isLoginVisible && <LoginPanel onClose={handleLoginCLose} handleSignUpClick={handleSignUpClick}
                                               handleSignInClose={handleLoginCLose}/>}
                {isSignUpVisible && <SignUpPanel onClose={handleSignUpClose} handleLoginClick={handleLoginClick}
                                                 handleSignUpClose={handleSignUpClose}/>}
            </nav>
        </>
    );
}

export default Navbar;