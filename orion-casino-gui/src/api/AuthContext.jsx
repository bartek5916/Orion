import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/auth/logout', {
                method: 'POST',
                credentials: 'include'
            });

            if (!response.ok) {
                console.error('Błąd podczas wylogowywania:', response.statusText);
            }
            setUser(null);
        } catch (error) {
            console.error('Błąd sieci podczas wylogowywania:', error);
        }
    };

    const refreshUser = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/users/${user.id}`, {
                method: 'GET',
                credentials: 'include',
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data);
            } else {
                console.error('Błąd podczas odświeżania danych użytkownika:', response.statusText);
            }
        } catch (error) {
            console.error('Błąd sieci podczas odświeżania danych użytkownika:', error);
        }
    };


    const updateBalance = (newBalance) => {
        setUser((prevUser) => ({ ...prevUser, balance: newBalance }));
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, refreshUser, updateBalance }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
