import React from 'react';
import AchievementCard from "../../AchievementCard/AchievementCard";
import './Achievements.css';

function Achievements(props) {

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
    );
}

export default Achievements;