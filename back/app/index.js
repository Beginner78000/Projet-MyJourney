const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
// const cors = require('cors');

const router = require('./routers');

const app = express();
require('./helpers/apiDocs')(app);
app.use('/images', express.static('images'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Middleware for cookies
app.use(cookieParser());

// cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Credentials', true);

    // response to preflight request
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

// const corsOptions = {
//     origin: process.env.CORS_DOMAINS ?? '*',
// };

// app.use(cors(corsOptions));

app.use(router);

module.exports = app;
