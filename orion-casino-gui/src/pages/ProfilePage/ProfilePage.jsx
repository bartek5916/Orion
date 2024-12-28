import React, { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "./ProfilePage.css";

function ProfilePage() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/profile") {
            navigate("settings");
        }
    }, [location.pathname, navigate]);

    return (
        <div className="profile-content">
            <h1 className="profile-title">MÓJ PROFIL</h1>
            <div className="profile-content-left">
                <div className="profile-left-container">
                    <div
                        className={`personal-data ${location.pathname.endsWith("settings") ? "active" : ""}`}
                        onClick={() => navigate("settings")}
                    >
                        Ustawienia profilu
                    </div>
                    <div
                        className={`achievements ${location.pathname.endsWith("achievements") ? "active" : ""}`}
                        onClick={() => navigate("achievements")}
                    >
                        Status
                    </div>
                    <div
                        className={`payments ${location.pathname.endsWith("payments") ? "active" : ""}`}
                        onClick={() => navigate("payments")}
                    >
                        Historia płatności
                    </div>
                </div>
            </div>
            <div className="profile-content-right">
                <Outlet/>
            </div>
        </div>
    );
}

export default ProfilePage;
