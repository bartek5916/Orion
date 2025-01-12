function isAuthenticated(req, res, next) {
    console.log("Sesja użytkownika:", req.session);
    if (req.session && req.session.user) {
        return next();
    }
    res.status(401).json({ error: 'Musisz być zalogowany, aby wykonać tę akcję.' });
}

module.exports = isAuthenticated;
