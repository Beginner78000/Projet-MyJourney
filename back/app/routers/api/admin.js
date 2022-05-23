const { Router } = require('express');

const validate = require('../../validation/validator');
const createSchema = require('../../validation/schemas/destinationCreateSchema');
const updateSchema = require('../../validation/schemas/destinationUpdateSchema');
const questionCreateSchema = require('../../validation/schemas/questionCreateSchema');
const responseCreateSchema = require('../../validation/schemas/responseCreateSchema');
const questionUpdateSchema = require('../../validation/schemas/questionUpdateSchema');
const responseUpdateSchema = require('../../validation/schemas/responseUpdateSchema');
const schema = require('../../validation/schemas/loginSchema');

const { adminController: controller } = require('../../controllers/api');
const controllerHandler = require('../../helpers/controllerHandler');
const { getAccessToken } = require('../../controllers/api/user');

const router = Router();

const { cache, flush } = require('../../helpers/cache');
const { verifyToken, verifyRefreshToken } = require('../../middlewares/verifyToken');

// Connexion
router
    .route('/register')
    /**
     * POST /api/admin/register
     * @summary Create a user admin
     * @tags Admin
     * @param {InputAdmin} request.body.required - Admin admin info
     * @return {Admin} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - User admin not found - application/json
     */
    .post(validate('body', createSchema), flush, controller.register);

router
    .route('/login')
    /**
     * POST /api/admin/login
     * @summary Get one user admin
     * @tags Admin
     * @param {InputAdmin} request.path.required - User admin info
     * @return {Admin} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - User admin not found - application/json
     */
    .post(validate('body', schema), flush, controllerHandler(controller.login));

router
    .route('/token', verifyRefreshToken)
    /**
     * POST /api/admin/token
     * @summary Get one token
     * @tags Admin
     * @param {InputAdmin} request.path.required - User admin info
     * @return {Admin} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - User admin not found - application/json
     */
    .post(validate('body', schema), flush, controllerHandler(getAccessToken));

router
    .route('/dashboard', verifyToken)
    /**
     * GET /api/admin/dashboard
     * @summary Get home page of user admin
     * @tags Admin
     * @return {[Admin]} 200 - success response - application/json
     */
    .get(controllerHandler(controller.dashboard));

router
    .route('/logout', verifyToken)
    /**
     * GET /api/admin/logout
     * @summary disconnect the user admin to his account
     * @tags Admin
     * @return {[Admin]} 200 - success response - application/json
     */
    .get(controllerHandler(controller.logout));

router
    .route('user/:id(\\d+)', verifyToken)
    /**
     * PATCH /api/admin/user/{id}
     * @summary Update one user
     * @tags Admin
     * @param {number} id.path.required - user identifier
     * @param {InputUser} request.body.required - user info
     * @return {Admin} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - User not found - application/json
     */
    .patch(validate('body', updateSchema), flush, controllerHandler(controller.update))
    /**
     * DELETE /api/admin/user/{id}
     * @summary Delete one user
     * @tags Admin
     * @param {number} id.path.required - user identifier
     * @return {Admin} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - User not found - application/json
     */
    .delete(flush, controllerHandler(controller.delete));

// CRUD destination
router
    .route('/destinations', verifyToken)
    /**
     * GET /api/admin/destinations
     * @summary Get all destinations
     * @tags Admin
     * @return {[Destination]} 200 - success response - application/json
     */
    .get(cache, controllerHandler(controller.getAllDestinations))
    /**
     * POST /api/admin/destinations
     * @summary Create a destination
     * @tags Admin
     * @param {InputDestination} request.body.required - destinations info
     * @return {Destination} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Destination not found - application/json
     */
    .post(validate('body', createSchema), flush, controllerHandler(controller.createDestination));

router
    .route('/destination/:id(\\d+)', verifyToken)
    /**
     * PATCH /api/admin/destinations/{id}
     * @summary Update one destination
     * @tags Admin
     * @param {number} id.path.required - destination identifier
     * @param {InputDestination} request.body.required - destination info
     * @return {Destination} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Destination not found - application/json
     */
    .patch(validate('body', updateSchema), flush, controllerHandler(controller.updateDestination))
    /**
     * DELETE /api/admin/destinations/{id}
     * @summary Delete one destination
     * @tags Destination
     * @param {number} id.path.required - destination identifier
     * @return {Destination} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Destination not found - application/json
     */
    .delete(flush, controllerHandler(controller.deleteDestination));

// CRUD quiz
router
    .route('/quiz', verifyToken)
    /**
     * POST /api/admin/quiz
     * @summary Create a quiz
     * @tags Admin
     * @param {InputQuiz} request.body.required - quiz info
     * @return {Quiz} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     */
    .post(
        validate('body', questionCreateSchema, responseCreateSchema),
        flush,
        controllerHandler(controller.createQuiz),
    );

router
    .route('/:id(\\d+)', verifyToken)
    /**
     * PATCH /api/admin/quiz/{id}
     * @summary Update one quiz
     * @tags Admin
     * @param {number} id.path.required - quiz identifier
     * @param {InputQuiz} request.body.required - quiz info
     * @return {Quiz} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Quiz not found - application/json
     */
    .patch(
        validate('body', questionUpdateSchema, responseUpdateSchema),
        flush,
        controllerHandler(controller.updateQuiz),
    )
    /**
     * DELETE /api/admin/quiz/{id}
     * @summary Delete one quiz
     * @tags Admin
     * @param {number} id.path.required - quiz identifier
     * @return {Quiz} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Quiz not found - application/json
     */
    .delete(flush, controllerHandler(controller.deleteQuiz));

module.exports = router;
