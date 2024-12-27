import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import ProfilePage from './pages/ProfilePage/ProfilePage';
import './App.css';

function App() {
  return (
      <Router>
          <div className="App">
              <Navbar/>
              <Sidebar/>
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/profile" element={<ProfilePage />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
