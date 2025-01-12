import React, {useState} from "react";
import './DepositPanel.css';
import {Link} from "react-router-dom";
import {useAuth} from "../../../api/AuthContext";

function DepositPanel({onClose}) {
    const [step, setStep] = useState(1);
    const [selectedMethod, setSelectedMethod] = useState("");
    const [amount, setAmount] = useState("");
    const { refreshUser, updateBalance } = useAuth();

    const paymentMethodsTop = [
        "Karta płatnicza",
        "Przelew",
        "Gift Card"
    ];

    const paymentMethodsBottom = [
        "Ethereum",
        "Bitcoin",
        "Kod promocyjny"
    ];

    const paymentAmountTop = [
        "$10",
        "$50",
        "$100",
        "$250"
    ];

    const paymentAmountBottom = [
        "$500",
        "$1000",
        "$5000",
        "$10000"
    ];

    const handleMethodSelect = (method) => {
        setSelectedMethod(method);
        setStep(2);
    };

    const handleDeposit = async () => {
        if (!amount || amount <= 0) {
            alert("Kwota musi być większa od zera.");
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/api/wallet/deposit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ amount: parseInt(amount) }),
            });

            const responseData = await response.json();
            console.log("Response data:", responseData);

            if (!response.ok) {
                alert(`Błąd: ${responseData.error}`);
                return;
            }

            updateBalance(responseData.balance);
            await refreshUser();

            alert(responseData.message);
            onClose();
        } catch (error) {
            console.error("Błąd sieci:", error);
            alert("Nie udało się zrealizować depozytu.");
        }
    };

    const handleDepositAmount = (selectedAmount) => {
        setAmount(selectedAmount.replace("$", ""));
    };

    const handleAnotherMethodSelect = () => {
        setStep(1);
    };

    return (
        <div className="overlay">
            <div className="deposit-popup">
                <button className="close-button-deposit" onClick={onClose}>&times;</button>
                <div className="deposit-left">
                    {step === 1 ? (
                        <div className="deposit-step-1">
                            <div className="deposit-top">
                                <div className="deposit-text">DEPOZYT</div>
                                <div className="fill-wallet-text">UZUPEŁNIJ SWÓJ PORTFEL</div>
                            </div>
                            <div className="deposit-payment">
                                <h2>1. Wybierz metodę płatności</h2>
                                <div className="payment-methods-top">
                                    {paymentMethodsTop.map((method) => (
                                        <button
                                            key={method}
                                            className="payment-method-button"
                                            onClick={() => handleMethodSelect(method)}
                                        >
                                            {method}
                                        </button>
                                    ))}
                                </div>
                                <div className="payment-methods-bottom">
                                    {paymentMethodsBottom.map((method) => (
                                        <button
                                            key={method}
                                            className="payment-method-button"
                                            onClick={() => handleMethodSelect(method)}
                                        >
                                            {method}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="deposit-step-2">
                            <div className="payment-method-top-2">
                                <div className="btn-go-back" onClick={handleAnotherMethodSelect}>
                                    <div className="btn-go-back-sign">{'<'}</div>
                                    <div className="btn-go-back-text">WYBIERZ INNĄ METODĘ PŁATNOŚCI</div>
                                </div>
                                <div className="payment-method-2">Metoda płatności: {selectedMethod}</div>
                                <div className="payment-method-step-2">2. Wybierz kwotę</div>
                            </div>
                            <div className="payment-amount-cards">
                                <div className="payment-amount-cards-top">
                                    {paymentAmountTop.map((method) => (
                                        <button
                                            key={method}
                                            className="payment-amount-button"
                                            onClick={() => handleDepositAmount(method)}
                                        >
                                            {method}
                                        </button>
                                    ))}
                                </div>
                                <div className="payment-amount-cards-bottom">
                                    {paymentAmountBottom.map((method) => (
                                        <button
                                            key={method}
                                            className="payment-amount-button"
                                            onClick={() => handleDepositAmount(method)}
                                        >
                                            {method}
                                        </button>
                                    ))}
                                </div>
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
                                    max="100000"
                                />
                            </div>
                            <button className="btn-deposit" onClick={handleDeposit}>
                                Doładuj
                            </button>
                        </div>
                    )}
                    <Link to="/profile/payments" className="footer-payment-history" onClick={onClose}>Historia wpłat</Link>
                    <div className="footer-payment-safety">Wszystkie transakcje są bezpieczne i szyfrowane. Twoje dane
                        są chronione.
                    </div>
                    <div className="footer-payment-orion">© 2024 Kasyno Orion</div>
                </div>
                <div className="deposit-right">
                    <h2>UWAGA</h2>
                    <ul>
                        <li>Środki zdeponowane w portfelu nie mogą być wypłacane w gotówce.</li>
                        <li>Możesz je wykorzystać wyłącznie na zakupy i transakcje w ramach platformy.</li>
                        <li>W przypadku problemów z płatnościami skontaktuj się z działem wsparcia technicznego.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DepositPanel;
