import React from "react";
import './LoginPanel.css';

function LoginPanel({onClose}) {
    return (
        <div className="overlay">
            <div className="login-popup">
                <button className="close-button" onClick={onClose}>&times;</button>
                <div className="login-popup-left">
                    <h1>Witamy w Kasynie Orion</h1>
                    <p>Zacznij swoją przygodę z grami już teraz!</p>
                </div>
                <div className="login-popup-right">
                    <h2 className="login-title">Zaloguj się</h2>
                    <form className="login-form">
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="text" id="email" placeholder="twojmail@gmail.com"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Hasło</label>
                            <input type="password" id="password" placeholder="Wpisz swoje hasło"/>
                        </div>
                        <div className="login-options">
                            <input type="checkbox" id="remember-me"/>
                            <label htmlFor="remember-me">Zapamiętaj mnie</label>
                            <a href="#" className="forgot-password" id="forgot-passoword">Nie pamiętasz hasła?</a>
                        </div>
                        <button type="submit" className="btn-login">Zaloguj</button>
                    </form>
                    <div className="signup-link">
                        Nie masz jeszcze konta? <a href="#" className="signup">Dołącz już teraz!</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPanel;
