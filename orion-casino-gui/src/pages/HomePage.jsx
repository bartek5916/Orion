import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

function HomePage() {
    return (
        <div className="home-page">
            <Navbar />
            <Sidebar/>
        </div>
    );
}

export default HomePage;