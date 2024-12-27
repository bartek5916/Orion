import React, {useState} from "react";
import "./ProfilePage.css";
import ButtonGradient from "../../components/Buttons/ButtonGradient";

function ProfilePage() {
    // 1. Stan aktywnej sekcji
    const [activeSection, setActiveSection] = useState("personalData");

    return (
        <div className="profile-content">
            <h1 className="profile-title">MÓJ PROFIL</h1>
            <div className="profile-content-left">
                <div className="profile-left-container">
                    {/* Przyciski do zmiany sekcji */}
                    <div
                        className={`personal-data ${activeSection === "personalData" ? "active" : ""}`}
                        onClick={() => setActiveSection("personalData")}
                    >
                        Ustawienia profilu
                    </div>
                    <div
                        className={`achievements ${activeSection === "achievements" ? "active" : ""}`}
                        onClick={() => setActiveSection("achievements")}
                    >
                        Osiągnięcia
                    </div>
                </div>
            </div>

            {/* Renderowanie sekcji dynamicznie */}
            <div className="profile-content-right">
                {activeSection === "personalData" && (
                    <div className="profile-personal-data">
                        <div className="profile-nickname">
                            <label htmlFor="nickname">Pseudonim</label>
                            <input type="text" id="nickname" placeholder="Wpisz swój nickname"/>
                        </div>
                        <div className="profile-email">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="example@email.com"/>
                        </div>
                        <div className="profile-phone">
                            <label htmlFor="phone">Telefon</label>
                            <div className="phone-input">
                                <select id="country-code">
                                    <option value="+48">+48</option>
                                    <option value="+44">+44</option>
                                    <option value="+1">+1</option>
                                </select>
                                <input type="tel" id="phone" placeholder="Nr telefonu"/>
                            </div>
                        </div>
                        <div className="profile-bottom-section">
                            <div className="profile-bottom-left">
                                <div className="profile-password">
                                    <h3>Zmiana hasła</h3>
                                    <div className="password-fields">
                                        <input type="password" placeholder="Nowe hasło"/>
                                        <input type="password" placeholder="Powtórz nowe hasło"/>
                                        <ButtonGradient
                                            width="100%"
                                            height="40px"
                                            color="linear-gradient(90deg, #ce63f3, #6D0DB6FF)"
                                            text="Zapisz"
                                        />
                                    </div>
                                </div>
                                <div className="profile-notifications">
                                    <div className="notifications-text">
                                        <h3>Powiadomienia email</h3>
                                        <p>Włącz powiadomienia, aby otrzymywać więcej bonusów</p>
                                    </div>
                                    <div className="toggler">
                                        <input id="toggler-1" name="toggler-1" type="checkbox" value="1"/>
                                        <label htmlFor="toggler-1">
                                            <svg className="toggler-on" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 130.2 130.2">
                                                <polyline className="path check"
                                                          points="100.2,40.2 51.5,88.8 29.8,67.5"></polyline>
                                            </svg>
                                            <svg className="toggler-off" version="1.1"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                                <line className="path line" x1="34.4" y1="34.4" x2="95.8"
                                                      y2="95.8"></line>
                                                <line className="path line" x1="95.8" y1="34.4" x2="34.4"
                                                      y2="95.8"></line>
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-bottom-right">
                                <div className="profile-photo">
                                    <h3>Wgraj zdjęcie profilowe</h3>
                                    <div className="upload-photo">
                                        <label htmlFor="upload-photo">Kliknij, aby wgrać zdjęcie</label>
                                        <input type="file" id="upload-photo"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeSection === "achievements" && (
                    <div className="profile-achievements">
                        <div className="achievement-card bronze">
                            <div className="achievement-status">Bronze</div>
                            <div className="achievement-money">$10k</div>
                            <ul>
                            <li>Monthly Bonuses</li>
                                <li>Level Up Bonuses</li>
                                <li>Rakeback</li>
                                <li>Weekly Bonuses</li>
                            </ul>
                        </div>
                        <div className="achievement-card silver">
                            <h2>Silver</h2>
                            <p>$50k - $100k</p>
                            <ul>
                                <li>Monthly Bonuses</li>
                                <li>Level Up Bonuses</li>
                                <li>Rakeback</li>
                                <li>Weekly Bonuses</li>
                                <li>Bonus Growth</li>
                            </ul>
                        </div>
                        {/* Możesz dodać więcej kart w podobny sposób */}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProfilePage;
