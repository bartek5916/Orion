import React, {useState} from "react";
import "./ProfilePage.css";
import ButtonGradient from "../../components/Buttons/ButtonGradient";
import AchievementCard from "../../components/AchievementCard/AchievementCard";

function ProfilePage() {
    const [activeSection, setActiveSection] = useState("personalData");

    const cards_top = [
        {
            status: 'Bronze',
            money: '$100',
            features: ['3% bonusu do depozytu', '1 FREESPIN dziennie', 'Turnieje ze stawką do 1000$']
        },
        {
            status: 'Silver',
            money: '$500 - $1000',
            features: ['5% bonusu do depozytu', '3 FREESPIN dziennie', 'Turnieje ze stawką do 5000$', 'Szybsza obsługa klienta']
        },
        {
            status: 'Gold',
            money: '$1000 - $5000',
            features: ['10% bonusu do depozytu', '5 FREESPIN dziennie', 'Turnieje ze stawką do 10000$', 'Dedykowany asystent klienta', 'Specjalne promocje']
        }
    ];

    const cards_bottom = [
        {
            status: 'Platinum',
            money: '$5k-$10k',
            features: ['13% bonusu do depozytu', '10 FREESPIN dziennie', 'Turnieje ze stawką do 20k$', 'Dedykowany asystent klienta', 'Specjalne promocje', 'Wydarzenia VIP']
        },
        {
            status: 'Emerald',
            money: '$10k-$50k',
            features: ['15% bonusu do depozytu', '12 FREESPIN dziennie', 'Turnieje ze stawką do 100k$', 'Osobisty asystent klienta', 'Specjalne promocje', 'Wydarzenia VIP']
        },
        {
            status: 'Diamond',
            money: '$50k+',
            features: ['20% bonusu do depozytu', '15 FREESPIN dziennie', 'Turnieje ze stawką bez limitu', 'Osobisty asystent klienta 24/7', 'Wydarzenia VIP', 'Unikalne, prywatne gry']
        }
    ];

    return (
        <div className="profile-content">
            <h1 className="profile-title">MÓJ PROFIL</h1>
            <div className="profile-content-left">
                <div className="profile-left-container">
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
                        Status
                    </div>
                </div>
            </div>

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
                                        <p>Włącz powiadomienia, aby otrzymywać specjalne oferty</p>
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
                        <div className="card-container-top">
                            {cards_top.map((card, index) => (
                                <AchievementCard
                                    key={index}
                                    status={card.status}
                                    money={card.money}
                                    features={card.features}
                                />
                            ))}
                        </div>
                        <div className="card-container-bottom">
                            {cards_bottom.map((card, index) => (
                                <AchievementCard
                                    key={index}
                                    status={card.status}
                                    money={card.money}
                                    features={card.features}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProfilePage;
