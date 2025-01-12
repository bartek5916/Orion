const db = require('../config/db');

class WalletModel {
    static async deposit(userId, amount) {
        if (!userId || amount <= 0) {
            throw new Error('Nieprawidłowe dane wejściowe');
        }

        const [wallet] = await db.query('SELECT * FROM wallet WHERE user_id = ?', [userId]);
        if (!wallet) {
            throw new Error('Portfel użytkownika nie istnieje');
        }

        await db.query(
            'INSERT INTO transaction_history (user_id, transaction_type, amount) VALUES (?, ?, ?)',
            [userId, 'deposit', amount]
        );

        await db.query('UPDATE wallet SET balance = balance + ? WHERE user_id = ?', [amount, userId]);

        return { message: 'Pomyslnie dodano pieniadze ' };
    }
}

module.exports = WalletModel;
