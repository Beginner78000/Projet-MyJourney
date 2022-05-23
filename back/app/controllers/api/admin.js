require('dotenv').config;
const { generateRefreshToken } = require('./user');
const userDataMapper = require('../../models/user')
const validator = require("email-validator");
const bcrypt = require("bcrypt");
const { ApiError } = require('../../helpers/errorHandler');
const questionDataMapper = require('../../models/question');
const responseDataMapper = require('../../models/response');
const destinationDataMapper = require('../../models/destination');
const jwt = require('jsonwebtoken');
const client = require('../../helpers/cache')

module.exports = {

    /**
     * Admin controller to register a user admin.
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async register(req, res) {
        const form = req.body;
        const user = await userDataMapper.findByEmail(form.email);

        if (!user) {
        
            if (validator.validate(form.email)) {
                
                if (form.password == form.passwordConfirm) {

                    const passwordHashed = await bcrypt.hash(form.password, 10);
                    
                    const newUser = await userDataMapper.insert({
                        firstname: form.firstname,
                        lastname: form.lastname,
                        email: form.email,
                        password: passwordHashed,
                        role: form.role
                    });
                    return res.json(newUser.id, newUser.role);
                }
                else {
                    throw new ApiError('The password and its confirmation are not identical', { statusCode: 404 });
                }
            }
            else {
                throw new ApiError(`The format of the email address is incorrect`, { statusCode: 404 });
            }
        }
        else {
            throw new ApiError(`email already used`, { statusCode: 404 });
        }

    },

    /**
     * Admin controller to connect a user admin.
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @security BearerAuth
     * @returns {string} Route API JSON response
     */
    async login(req, res) {
        const form = req.body;
        const user = await userDataMapper.findByEmail(form.email);

        if (user) {

            if (await bcrypt.compare(form.password, user.password)) {
                return res.json(user.id, user.role);
            }

            client.get("counter", (_, data) => {
                client.set("counter", parseInt(data) + 1);
                jwt.sign({ user: user.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
            })
            const accessToken = jwt.sign({ user: user.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' }, (_, token) => {
                client.set(parseInt(data) + 1, token);
                res.cookie("jwt-id", parseInt(data) + 1);
                return res.send("logged in");
            });
            const refreshToken = generateRefreshToken(user.email);

            return res.json({ status: true, message: "login success", data: { accessToken, refreshToken } });

        } else {
            throw new ApiError(`There is an error in the login/password couple`, { statusCode: 404 });
        }

    },

    /**
     * Admin controller to update a user.
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
        return res.json(savedUser);
    },

    /**
     * Admin controller to delete a user.
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
     async delete(req, res) {
        const id = req.params.id;

        const user = await userDataMapper.findByPk(id);
        if (!user) {
            throw new ApiError('This user does not exists', { statusCode: 404 });
        }

        await userDataMapper.delete(id);
        return res.status(204).json();
    },

    /**
     * Admin controller to disconnect a user.
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async logout(_, res) {
        const id = req.params.id;
        const token = req.token;

        const user = await userDataMapper.findByPk(id);
        if (!user) {
            throw new ApiError('This user does not exists', { statusCode: 404 });
        }

        // remove the refresh token
        await client.del(user.toString());

        // blacklist current access token
        await client.set('BL_' + user.toString(), token);

        return res.redirect("/api/admin");

    },

    /**
     * Destination controller to get all destination.
     * ExpressMiddleware signature
     * @param {object} req Express request object (not used)
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async getAllDestinations(_, res) {
        // debug('Data via Postgres');
        const destinations = await destinationDataMapper.findAll();
        return res.json(destinations);
    },

    /**
   * Destination controller to create a destination.
   * ExpressMiddleware signature
   * @param {object} req Express request object
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
    async createDestination(req, res) {

        const savedDestination = await destinationDataMapper.insert(req.body);
        return res.json(savedDestination);
    },

    /**
     * Destination controller to update a destination.
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async updateDestination(req, res) {
        const destination = await destinationDataMapper.findByPk(req.params.id);
        if (!destination) {
            throw new ApiError('This destination does not exists', { statusCode: 404 });
        }

        const savedDestination = await destinationDataMapper.update(req.params.id, req.body);
        return res.json(savedDestination);
    },

    /**
     * Destination controller to delete a destination.
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async deleteDestination(req, res) {
        const id = req.params.id;

        const destination = await destinationDataMapper.findByPk(id);
        if (!destination) {
            throw new ApiError('This destination does not exists', { statusCode: 404 });
        }

        await destinationDataMapper.delete(id);
        return res.status(204).json();
    },

    /**
     * Quiz controller to create a quiz.
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async createQuiz(req, res) {

        let quiz = [];

        const savedQuestion = await questionDataMapper.insert(req.body);
        const savedResponse = await responseDataMapper.insert(req.body);

        quiz.push(savedResponse, savedQuestion);
        return res.json(quiz);
    },

    /**
     * Quiz controller to update a quiz.
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async updateQuiz(req, res) {
        let quiz = [];

        const savedQuestion = await questionDataMapper.update(req.params.id, req.body);
        const savedResponse = await responseDataMapper.update(req.params.id, req.body);

        quiz.push(savedResponse, savedQuestion);
        return res.json(quiz);
    },

    /**
     * Quiz controller to delete a quiz.
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async deleteQuiz(req, res) {
        const id = req.params.id;

        const question = await questionDataMapper.findByPk(id);
        const response = await responseDataMapper.findByPk(id);

        if (!question & !response) {
            throw new ApiError('This question and this response do not exists', { statusCode: 404 });
        }

        await questionDataMapper.delete(id);
        await responseDataMapper.delete(id);
        return res.status(204).json();
    },

    async register(req, res) {

        const id = req.body.id;
        const username = req.body.username;
        const password = req.body.password;
        jwt.sign(id, 'secret_key', (err, token) => {
            if (err) {
                res.status(400).send({ msg: 'Error' })
            }
            else {
                res.send({ msg: 'success', token: token })
            }
        })
    },

    async login(req, res) {
        res.send('You are Authorized!')
    },

};