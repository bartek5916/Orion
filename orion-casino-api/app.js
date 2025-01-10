const express = require('express');
const session = require('express-session');
const db = require('./config/db');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');

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
            maxAge: 1000 * 60 * 60,
        },
    })
);

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Test');
})

app.listen(8080, () => {
    console.log('Listening on port 8080');
})