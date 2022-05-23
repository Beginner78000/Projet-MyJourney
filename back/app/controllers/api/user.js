require('dotenv').config;
const userDataMapper = require('../../models/user');
const validator = require('email-validator');
const bcrypt = require('bcrypt');
const { ApiError } = require('../../helpers/errorHandler');
const jwt = require('jsonwebtoken');

module.exports = {
    /**
     * User controller to register a user.
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async register(req, res) {
        const form = req.body;
        // vérifier qu'un compte n'existe pas avec l'adresse mail fournie
        const user = await userDataMapper.findByEmail(form.email);
        if (!user) {
            // si c'est bon alors j'enregistre
            // je checke les champs pour voir s'ils sont conformes
            // le mail est il bien un mail ?
            if (validator.validate(form.email)) {
                // le mot de passe est-il identique à celui de confirmation
                if (form.password == form.passwordConfirm) {
                    const passwordHashed = await bcrypt.hash(form.password, 10);
                    // on enregistre tout en BDD
                    const newUser = await userDataMapper.insert({
                        username: form.username,
                        firstname: form.firstname,
                        lastname: form.lastname,
                        email: form.email,
                        password: passwordHashed,
                        role: form.role,
                        avatar: form.avatar,
                    });
                    return res
                        .status(200)
                        .json({ msg: 'register success', username: newUser.username });
                } else {
                    throw new ApiError('The password and its confirmation are not identical', {
                        statusCode: 404,
                    });
                }
            } else {
                throw new ApiError('The format of the email address is incorrect', {
                    statusCode: 404,
                });
            }
        } else {
            throw new ApiError('email already used', { statusCode: 404 });
        }
    },
    /**
     * User controller to connect a user.
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @security BearerAuth
     * @returns {string} Route API JSON response
     */
    async login(req, res) {
        const form = req.body;
        const cookies = req.cookies;

        const jwt_expiration = 60 * 15;
        const refresh_jwt_expiration = '1d';

        const foundUser = await userDataMapper.findByEmail(form.email);

        if (foundUser) {
            if (!bcrypt.compare(form.password, user.password)) {
                res.status(401).json('There is an error in the login/password couple');
            }

            // const roles = Object.values(foundUser.role).filter(Boolean);

            const accessToken = jwt.sign({ user: user.email }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: jwt_expiration,
            });

            const newRefreshToken = jwt.sign({ user: user.email }, process.env.REFRESH_TOKEN_SECRET, {
                expiresIn: refresh_jwt_expiration,
            });

             // Changed to let keyword
            let newRefreshTokenArray =
            !cookies?.jwt
                ? foundUser.refreshToken
                : foundUser.refreshToken.filter(rt => rt !== cookies.jwt);

            if (cookies?.jwt) {

            /* 
            Scenario added here: 
                1) User logs in but never uses RT and does not logout 
                2) RT is stolen
                3) If 1 & 2, reuse detection is needed to clear all RTs when user logs in
            */

                const refreshToken = cookies.jwt;
                const foundToken = await userDataMapper.findByPk(req.params.id, { refreshToken });
    
                // Detected refresh token reuse!
                if (!foundToken) {
                    console.log('attempted refresh token reuse at login!')
                    // clear out ALL previous refresh tokens
                    newRefreshTokenArray = [];
                }
    
                res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
            }

            // Saving refreshToken with current user
            foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
            const result = await foundUser.save();

            // Creates Secure Cookie with refresh token
            res.cookie('jwt', newRefreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000});

            // Send authorization roles and access token to user
            res.json({
                accessToken: accessToken,
                msg: 'login success',
                username: user.username,
            });

        } else {
            throw new ApiError('There is an error in the login/password couple', {
                statusCode: 401,
            });
        }
    },

    /**
     * User controller to update a user.
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async update(req, res) {
        const user = await userDataMapper.findByPk(req.params.id);
        if (!user) {
            throw new ApiError('This user does not exists', { statusCode: 404 });
        }

        const savedUser = await userDataMapper.update(req.params.id, req.body);
        return res.json(savedUser.id);
    },

    async logout(req, res) {
        // On client side, also delete the accessToken
    
        const cookies = req.cookies;
        if (!cookies?.jwt) return res.sendStatus(204); //No content
        const refreshToken = cookies.jwt;
    
        // Is refreshToken in db?
        const foundUser = await userDataMapper.findByPk(req.params.id, { refreshToken });
        if (!foundUser) {
            res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
            return res.sendStatus(204);
        }
    
        // Delete refreshToken in db
        foundUser.refreshToken = foundUser.refreshToken.filter(rt => rt !== refreshToken);
        const result = await foundUser.save();
        // console.log(result);
    
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
        res.sendStatus(204);
    },

    async handleRefreshToken(req, res) {
        const cookies = req.cookies;
        if (!cookies?.jwt) return res.sendStatus(401);
        const refreshToken = cookies.jwt;
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    
        const foundUser = await userDataMapper.findByPk(req.params.id, { refreshToken });
    
        // Detected refresh token reuse!
        if (!foundUser) {
            jwt.verify(
                refreshToken,
                process.env.REFRESH_TOKEN_SECRET,
                async (err, decoded) => {
                    if (err) return res.sendStatus(403); //Forbidden
                    console.log('attempted refresh token reuse!')
                    const hackedUser = await userDataMapper.findByPk(req.params.id, { refreshToken });
                    hackedUser.refreshToken = [];
                    const result = await hackedUser.save();
                    // console.log(result);
                }
            )
            return res.sendStatus(403); //Forbidden
        }
    
        const newRefreshTokenArray = foundUser.refreshToken.filter(rt => rt !== refreshToken);
    
        // evaluate jwt 
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            async (err, decoded) => {
                if (err) {
                    // console.log('expired refresh token')
                    foundUser.refreshToken = [...newRefreshTokenArray];
                    await foundUser.save();
                    
                }
                if (err || foundUser.username !== decoded.username) return res.sendStatus(403);
    
                // Refresh token was still valid
                // const roles = Object.values(foundUser.roles);
                const accessToken = jwt.sign(
                    {
                        "UserInfo": {
                            "username": decoded.username,
                            // "roles": roles
                        }
                    },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '15m' }
                );
    
                const newRefreshToken = jwt.sign(
                    { "username": foundUser.username },
                    process.env.REFRESH_TOKEN_SECRET,
                    { expiresIn: '1d' }
                );

                // Saving refreshToken with current user
                foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
                await foundUser.save();
    
                // Creates Secure Cookie with refresh token
                res.cookie('jwt', newRefreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });
    
                res.json({ accessToken })
            }
        );
    },
};
