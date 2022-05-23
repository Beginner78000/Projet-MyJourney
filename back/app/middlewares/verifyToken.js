const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);

    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403); //invalid token
        req.user = decoded.user;
        next();
    });
};

// A little helper function for generation of refresh tokens
function refresh_token(len) {
    var text = '';
    var charset = 'abcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < len; i++)
        text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
}

module.exports = { refresh_token, verifyToken }
