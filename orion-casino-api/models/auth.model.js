const crypto = require('crypto');

class AuthModel {
    static hashPassword(password) {
        return crypto.createHash('sha256').update(password).digest('hex');
    }
}

module.exports = AuthModel;