import React from 'react';
import './AchievementCard.css'

function AchievementCard({ status, money, features }) {
    return (
        <div className={`achievement-card ${status.toLowerCase()}`}>
            <div className="achievement-status">{status}</div>
            <div className="achievement-money">{money}</div>
            <ul className="achievement-features">
                {features.map((feature, index) => (
                    <li key={index} className="feature-item">{feature}</li>
                ))}
            </ul>
        </div>
    );
}

export default AchievementCard;