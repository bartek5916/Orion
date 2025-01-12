import React, {useState} from "react";
import {useAuth} from "../../../api/AuthContext";
import './LoginPanel.css';

function LoginPanel({onClose, handleSignUpClick, handleSignInClose}) {

    const handleSignUp = () => {
        handleSignUpClick(true);
        handleSignInClose(true);
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setErrorMessage(errorData.error);
                return;
            }

            const data = await response.json();
            login(data);
            console.log("Zalogowano pomyślnie:", data.message);
            setErrorMessage("");
            onClose();
        } catch (error) {
            console.error("Błąd sieci:", error);
            setErrorMessage("Błąd połączenia z serwerem");
        }
    };


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
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="text" id="email" placeholder="twojmail@gmail.com" value={email} onChange ={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Hasło</label>
                            <input type="password" id="password" placeholder="Wpisz swoje hasło" value={password} onChange ={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="login-options">
                            <input type="checkbox" id="remember-me"/>
                            <label htmlFor="remember-me">Zapamiętaj mnie</label>
                            <a href="#" className="forgot-password" id="forgot-passoword">Nie pamiętasz hasła?</a>
                        </div>
                        <button type="submit" className="btn-login">Zaloguj</button>
                    </form>
                    <div className="signup-link">
                        Nie masz jeszcze konta?
                        <a href="#" className="signup" onClick={handleSignUp}>Dołącz już teraz!</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPanel;
