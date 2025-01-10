const db = require('../config/db');
const {hashPassword} = require("./auth.model");

class UserModel {

    static async registerUser(data) {
        const hashedPassword = hashPassword(data.password);

        const query = `
            INSERT INTO user (email, password, nickname, phone, role, avatar)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.email,
            hashedPassword,
            data.nickname || null,
            data.phone || null,
            'user',
            data.avatar || null,
        ];

        try {
            const [results] = await db.query(query, values);
            return results;
        } catch (err) {
            console.error('Błąd podczas tworzenia użytkownika:', err.message);
            throw new Error('Nie udało się utworzyć użytkownika.');
        }
    }

    static async updateUser(id, data) {
        const query = `
            UPDATE user
            SET email = ?, nickname = ?, phone = ?, role = ?, avatar = ?, updated_at = CURRENT_TIMESTAMP
            WHERE id = ? AND deleted_at IS NULL
        `;
        const values = [
            data.email,
            data.nickname || null,
            data.phone || null,
            data.role,
            data.avatar || null,
            id,
        ];

        try {
            const [results] = await db.query(query, values);
            return results;
        } catch (err) {
            console.error('Błąd podczas aktualizacji użytkownika:', err.message);
            throw new Error('Nie udało się zaktualizować użytkownika.');
        }
    }

    static async deleteUser(id) {
        const query = `
            UPDATE user
            SET deleted_at = CURRENT_TIMESTAMP
            WHERE id = ?
        `;

        try {
            const [results] = await db.query(query, [id]);
            return results;
        } catch (err) {
            console.error('Błąd podczas usuwania użytkownika:', err.message);
            throw new Error('Nie udało się usunąć użytkownika.');
        }
    }

    static async getAllUsers() {
        const query = 'SELECT * FROM user WHERE deleted_at IS NULL';

        try {
            const [results] = await db.query(query);
            return results;
        } catch (err) {
            console.error('Błąd podczas pobierania użytkowników:', err.message);
            throw new Error('Nie udało się pobrać użytkowników.');
        }
    }

    static async getUserById(id) {
        const query = `
            SELECT id, email, nickname, phone, role, avatar, created_at, updated_at
            FROM user
            WHERE id = ? AND deleted_at IS NULL
        `;

        try {
            const [results] = await db.query(query, [id]);
            if (results.length === 0) {
                throw new Error('Nie znaleziono gracza.');
            }
            return results[0];
        } catch (err) {
            console.error('Błąd podczas pobierania użytkownika po ID:', err.message);
            throw err;
        }
    }
}

module.exports = UserModel;
