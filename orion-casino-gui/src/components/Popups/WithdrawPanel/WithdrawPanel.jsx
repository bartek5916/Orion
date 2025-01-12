import React, { useState } from "react";
import '../DepositPanel/DepositPanel.css';
import { useAuth } from "../../../api/AuthContext";

function WithdrawPanel({ onClose }) {
    const [amount, setAmount] = useState("");
    const { user, updateBalance, refreshUser } = useAuth();

    const handleWithdraw = async () => {
        if (!amount || amount <= 0) {
            alert("Kwota musi być większa od zera.");
            return;
        }

        if (amount > user.balance) {
            alert("Kwota wypłaty nie może przekraczać aktualnego salda.");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/api/wallet/withdraw", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ amount: parseInt(amount) }),
            });

            const responseData = await response.json();

            if (!response.ok) {
                alert(`Błąd: ${responseData.error}`);
                return;
            }

            updateBalance(user.balance - parseInt(amount));
            await refreshUser();

            alert(responseData.message);
            onClose();
        } catch (error) {
            console.error("Błąd podczas wypłaty:", error);
            alert("Nie udało się zrealizować wypłaty.");
        }
    };

    return (
        <div className="overlay">
            <div className="deposit-popup">
                <button className="close-button-deposit" onClick={onClose}>&times;</button>
                <div className="deposit-left">
                    <div className="deposit-step-1">
                        <div className="deposit-top">
                            <div className="deposit-text">WYPŁATA</div>
                            <div className="fill-wallet-text">WYPŁAĆ ŚRODKI Z PORTFELA</div>
                        </div>
                        <div className="amount-selection">
                            <div className="dollar-sign">$</div>
                            <input
                                type="number"
                                id="amount"
                                placeholder="Wpisz kwotę"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                min="1"
                                max={user.balance}
                            />
                        </div>
                        <button className="btn-deposit" onClick={handleWithdraw}>
                            Wypłać
                        </button>
                    </div>
                </div>
                <div className="deposit-right">
                    <h2>UWAGA</h2>
                    <ul>
                        <li>Środki mogą być wypłacane tylko do wysokości dostępnego salda.</li>
                        <li>Wszystkie wypłaty są symulowane na potrzeby testów.</li>
                        <li>W przypadku problemów, skontaktuj się z działem wsparcia technicznego.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WithdrawPanel;
