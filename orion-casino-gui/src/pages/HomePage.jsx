import React, {useState} from 'react';
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import MainContent from "../components/MainContent/MainContent";
import LoginPanel from "../components/Login/LoginPanel";
import './HomePage.css';

function HomePage() {
    const [isLoginVisible, setLoginVisible] = useState(false);

    const openLoginPanel = () => setLoginVisible(true);
    const closeLoginPanel = () => setLoginVisible(false);

    return (
        <div className="home-page">
            <Navbar onLoginClick={openLoginPanel} />
            {isLoginVisible && (
                <div className="modal-overlay" onClick={closeLoginPanel}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <LoginPanel />
                        <button className="close-button" onClick={closeLoginPanel}>X</button>
                    </div>
                </div>
            )}
            <MainContent/>
            <Sidebar/>
        </div>
    );
}

export default HomePage;