const express = require('express');
const session = require('express-session');
const db = require('./config/db');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
const walletRoutes = require('./routes/wallet.routes');
const cors = require('cors');
const app = express();

app.use(express.json());

(async () => {
    try {
        const connection = await db.getConnection();
        console.log('polaczono');
        connection.release();
    } catch (err) {
        console.error('xd', err);
    }
})();

app.use(
    session({
        secret: 'key',
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 3600000,
        },
    })
);

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/wallet', walletRoutes);

app.get('/api/session-check', (req, res) => {
    console.log("Sesja podczas diagnostyki:", req.session);
    if (req.session && req.session.user) {
        res.status(200).json({ message: 'Sesja aktywna', user: req.session.user });
    } else {
        res.status(401).json({ error: 'Brak aktywnej sesji' });
    }
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
})