import React, {useState} from 'react';
import './Sidebar.css';
import SidebarButton from "../../Buttons/SidebarButton";
import ButtonGradient from "../../Buttons/ButtonGradient";
import DepositPanel from "../../Popups/DepositPanel/DepositPanel";
import {useAuth} from "../../../api/AuthContext";
import LoginPanel from "../../Authorization/Login/LoginPanel";
import WithdrawPanel from "../../Popups/WithdrawPanel/WithdrawPanel";

function Sidebar() {
    const { user } = useAuth();
    const [isLoginVisible, setLoginVisible] = useState(false);
    const [isDepositVisible, setDepositVisible] = useState(false);
    const [isWithdrawVisible, setWithdrawVisible] = useState(false);

    const handleDepositClick = () => {
        if (!user) {
            setLoginVisible(true);
        } else {
            setDepositVisible(true);
        }
        document.body.style.overflow = 'hidden';
    };

    const handleWithdrawClick = () => {
        if (!user) {
            setLoginVisible(true);
        } else {
            setWithdrawVisible(true);
        }
        document.body.style.overflow = 'hidden';
    };


    return (
            <nav className="sidebar">
                <div className="sidebar-container">
                    <div className="free-spin-button">
                        <img className="free-spin-icon" src="/assets/images/sidebar/free-spin.png"
                             alt="freespin-icon"></img>
                        <div className="free-spin-text">FREE SPIN</div>
                        <img className="free-spin-icon" src="/assets/images/sidebar/free-spin.png"
                             alt="freespin-icon"></img>
                    </div>

                    <div className="main-tiles">
                        <div className="popular-games">
                            <SidebarButton text="Popularne gry" icon="/assets/images/sidebar/popular-icon.png"/>
                        </div>
                        <div className="new-games">
                            <SidebarButton text="Nowe gry" icon="/assets/images/sidebar/new-games.png"/>
                        </div>
                        <div className="facourite-games">
                            <SidebarButton text="Ulubione gry" icon="/assets/images/sidebar/favourite-icon.png"/>
                        </div>
                        <div className="deposit" onClick={handleDepositClick}>
                            <SidebarButton text="Depozyt" icon="/assets/images/sidebar/deposit-icon.png"/>
                        </div>
                        <div className="deposit" onClick={handleWithdrawClick}>
                            <SidebarButton text="Wypłata" icon="/assets/images/sidebar/deposit-icon.png"/>
                        </div>
                        <div className="leaderboard">
                            <SidebarButton text="Ranking" icon="/assets/images/sidebar/ranking-icon.png"/>
                        </div>
                        <div className="about-us">
                            <SidebarButton text="O nas" icon="/assets/images/sidebar/about-us.png"/>
                        </div>
                    </div>

                    <div className="bottom-tiles">
                        <div className="support-button">
                            <SidebarButton text="Wsparcie" icon="/assets/images/sidebar/faq-icon.png"/>
                        </div>
                        <div className="deposit-button">
                            <ButtonGradient width="300px" height="80px"
                                            color="linear-gradient(90deg, #ce63f3, #6D0DB6FF)" text="DEPOZYT" onClick={handleDepositClick}/>
                        </div>
                    </div>
                </div>
                {isLoginVisible && <LoginPanel onClose={() => setLoginVisible(false)} />}
                {isDepositVisible && <DepositPanel onClose={() => setDepositVisible(false)} />}
                {isWithdrawVisible && <WithdrawPanel onClose={() => setWithdrawVisible(false)} />}
            </nav>
    );
}

export default Sidebar;