import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navigation/Navbar/Navbar";
import Sidebar from "./components/Navigation/Sidebar/Sidebar";
import ProfilePage from './pages/ProfilePage/ProfilePage';
import './App.css';
import PersonalData from "./components/ProfilePage/PersonalData/PersonalData";
import Achievements from "./components/ProfilePage/Achievements/Achievements";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Sidebar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/profile/*" element={<ProfilePage />}>
                        <Route path="settings" element={<PersonalData />} />
                        <Route path="achievements" element={<Achievements />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
