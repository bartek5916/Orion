const WalletModel = require('../models/wallet.model');

const walletController = {
    async deposit(req, res) {
        try {
            const user = req.session.user;
            const { amount } = req.body;

            if (!amount || amount <= 0) {
                return res.status(400).json({ error: 'Nieprawidłowa kwota.' });
            }

            const result = await WalletModel.deposit(user.id, parseInt(amount));
            // Aktualizacja salda w sesji
            req.session.user.balance += parseInt(amount);

            res.status(200).json(result);
        } catch (error) {
            console.error('Błąd podczas depozytu:', error.message);
            res.status(400).json({ error: error.message });
        }
    },
    async withdraw(req, res) {
        try {
            const user = req.session.user;
            const { amount } = req.body;

            if (!amount || amount <= 0) {
                return res.status(400).json({ error: 'Nieprawidłowa kwota.' });
            }

            if (amount > user.balance) {
                return res.status(400).json({ error: 'Kwota wypłaty przekracza dostępne saldo.' });
            }

            const result = await WalletModel.withdraw(user.id, parseInt(amount));
            req.session.user.balance -= parseInt(amount);

            res.status(200).json(result);
        } catch (error) {
            console.error('Błąd podczas wypłaty:', error.message);
            res.status(400).json({ error: error.message });
        }
    },
};

module.exports = walletController;
