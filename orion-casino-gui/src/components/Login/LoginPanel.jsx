import React from "react";
import './LoginPanel.css';

function LoginPanel({onClose}) {
    return (
        <div className="overlay">
            <div className="login-popup">
                <div className="login-popup-left">
                    <h1>Witamy w Kasynie Orion</h1>
                    <p>Zacznij swoją przygodę z grami już teraz!</p>
                </div>
                <div className="login-popup-right">
                   {/* <form>
                        <div className="form-group">
                            <label htmlFor="email">Adres e-mail</label>
                            <input
                                type="text"
                                id="email"
                                placeholder="Wprowadź adres e-mail"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Hasło</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Wprowadź swoje hasło"
                            />
                        </div>
                        <div className="form-options">
                            <a href="#">Zapomniałeś hasła?</a>
                        </div>
                        <button type="submit" className="btn-login">Zaloguj się</button>
                    </form>*/}
                    <div className="register-link">
                        {/*Nie masz konta? <a href="#">Zarejestruj się</a>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPanel;
