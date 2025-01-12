import React, {useState} from "react";
import './SignUpPanel.css';

function SignUpPanel({onClose, handleLoginClick, handleSignUpClose}) {

    const handleLogIn = () => {
        handleLoginClick(true);
        handleSignUpClose(true);
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== repeatPassword) {
            console.log("hasla identyczne");
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.log(errorData.error)
                return;
            }

            const data = await response.json();
            setSuccessMessage(data.message);
            setErrorMessage('');
            onClose();
        } catch (error) {
            console.error('Błąd sieci:', error);
        }
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
                    <form className="signup-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="text" id="email" placeholder="twojmail@gmail.com" value={email} onChange ={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Hasło</label>
                            <input type="password" id="password" placeholder="Wpisz swoje hasło" value={password} onChange ={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="repeat-password">Powtórz hasło</label>
                            <input type="password" id="repeat-password" placeholder="Wpisz swoje hasło" value={repeatPassword} onChange ={(e) => setRepeatPassword(e.target.value)}/>
                        </div>
                        <div className="signup-options">
                            <input type="checkbox" id="statute"/>
                            <label htmlFor="statute">Akceptuję regulamin</label>
                            <input type="checkbox" id="majority"/>
                            <label htmlFor="majority">Jestem osobą pełnoletnią</label>
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        {successMessage && <p className="success-message">{successMessage}</p>}
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
