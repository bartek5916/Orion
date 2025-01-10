const User = require('../models/user.model');

const userController = {
    async getAllUsers(req, res) {
        try {
            const users = await User.getAllUsers();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({error: 'Błąd serwera podczas pobierania użytkowników.'});
        }
    },
    async getUserById(req, res) {
        try {
            const id = req.params.id;
            const user = await User.getUserById(id);
            res.status(200).json(user);
        } catch (err) {
            res.status(404).json({error: err.message});
        }
    },

    async register(req, res) {
        try {
            const {email, password, nickname, phone, avatar} = req.body;

            if (!email || !password) {
                return res.status(400).json({error: 'Email i hasło są wymagane.'});
            }

            const newUser = {
                email,
                password,
                nickname,
                phone,
                avatar,
            };

            await User.registerUser(newUser);

            res.status(201).json({
                message: 'Użytkownik został pomyślnie utworzony.',
            });
        } catch (err) {
            if (err.message.includes('ER_DUP_ENTRY')) {
                return res.status(409).json({error: 'Użytkownik z podanym emailem już istnieje.'});
            }
            console.error('Błąd podczas tworzenia użytkownika:', err.message);
            res.status(500).json({error: 'Błąd serwera podczas tworzenia użytkownika.'});
        }
    }
};

module.exports = userController;
