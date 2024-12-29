import React from "react";
import './SignUpPanel.css';

function SignUpPanel({onClose, handleLoginClick, handleSignUpClose}) {

    const handleLogIn = () => {
        handleLoginClick(true);
        handleSignUpClose(true);
    };

    return (
        <div className="overlay">
            <div className="signup-popup">
                <button className="close-button" onClick={onClose}>&times;</button>
                <div className="signup-popup-left">
                    <h1>Witamy w Kasynie Orion</h1>
                    <p>Zacznij swoją przygodę z grami już teraz!</p>
                </div>
                <div className="signup-popup-right">
                    <h2 className="signup-title">Zarejestruj się</h2>
                    <form className="signup-form">
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="text" id="email" placeholder="twojmail@gmail.com"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Hasło</label>
                            <input type="password" id="password" placeholder="Wpisz swoje hasło"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="repeat-password">Powtórz hasło</label>
                            <input type="password" id="repeat-password" placeholder="Wpisz swoje hasło"/>
                        </div>
                        <div className="signup-options">
                            <input type="checkbox" id="statute"/>
                            <label htmlFor="statute">Akceptuję regulamin</label>
                            <input type="checkbox" id="majority"/>
                            <label htmlFor="majority">Jestem osobą pełnoletnią</label>
                        </div>
                        <button type="submit" className="btn-signup">Zarejestruj</button>
                    </form>
                    <div className="login-link">
                        Masz już konto?
                        <a href="#" className="login" onClick={handleLogIn}>Zaloguj się!</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpPanel;
