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

    static async withdraw(userId, amount) {
        if (!userId || amount <= 0) {
            throw new Error('Nieprawidłowe dane wejściowe');
        }

        const [wallet] = await db.query('SELECT * FROM wallet WHERE user_id = ?', [userId]);
        if (!wallet) {
            throw new Error('Portfel użytkownika nie istnieje');
        }

        if (wallet.balance < amount) {
            throw new Error('Za mało środkw na koncie');
        }

        try {
            await db.query(
                'INSERT INTO transaction_history (user_id, transaction_type, amount) VALUES (?, ?, ?)',
                [userId, 'withdrawal', amount]
            );
            console.log(`Dodano wpis do transaction_history: userId=${userId}, amount=${amount}`);
        } catch (error) {
            console.error('Błąd podczas zapisywania transakcji w historii:', error.message);
            throw new Error('Nie udało się zapisać transakcji w historii.');
        }

        await db.query('UPDATE wallet SET balance = balance - ? WHERE user_id = ?', [amount, userId]);

        return { message: 'Pomyślnie wypłacono środki.' };
    }
}

module.exports = WalletModel;
