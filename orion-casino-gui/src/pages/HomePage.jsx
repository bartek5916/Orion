import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import MainContent from "../components/MainContent/MainContent";
import './HomePage.css';

function HomePage() {
    return (
        <div className="home-page">
            <Navbar />
            <Sidebar/>
        </div>
    );
}

export default HomePage;