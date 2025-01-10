const db = require('../config/db');
const {hashPassword} = require("../models/auth.model");

async function login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'E-mail i hasło są wymagane.' });
    }

    try {
        const query = 'SELECT * FROM user WHERE email = ? AND deleted_at IS NULL';
        const [users] = await db.query(query, [email]);

        if (users.length === 0) {
            return res.status(404).json({ error: 'Nie znaleziono użytkownika.' });
        }

        const user = users[0];
        const hashedPassword = hashPassword(password);

        if (user.password !== hashedPassword) {
            return res.status(401).json({ error: 'Nieprawidłowe dane logowania.' });
        }

        req.session.userId = user.id;
        req.session.role = user.role;
        res.status(200).json({ message: 'Zalogowano pomyślnie.', userId: user.id });
    } catch (error) {
        console.error('Błąd podczas logowania:', error.message);
        res.status(500).json({ error: 'Błąd serwera podczas logowania.' });
    }
}

function logout(req, res) {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ error: 'Nie udało się wylogować użytkownika.' });
        }
        res.clearCookie('connect.sid');
        res.status(200).json({ message: 'Wylogowano pomyślnie.' });
    });
}

module.exports = { login, logout };
