const { Router } = require('express');

const validate = require('../../validation/validator');
const createSchema = require('../../validation/schemas/userCreateSchema');
const updateSchema = require('../../validation/schemas/userUpdateSchema');
const loginSchema = require('../../validation/schemas/loginSchema');

const { userController: controller } = require('../../controllers/api');
const controllerHandler = require('../../helpers/controllerHandler');

const { flush } = require('../../helpers/cache');
const { verifyToken, verifyRefreshToken } = require('../../middlewares/verifyToken');

const router = Router();

router
    .route('/register')
    /**
     * POST /api/users/register
     * @summary Create a user
     * @tags User
     * @param {InputUser} request.body.required - users info
     * @return {User} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - User not found - application/json
     */
    .post(validate('body', createSchema), flush, controller.register);

router
    .route('/login')
    /**
     * POST /api/users/login
     * @summary Get one user
     * @tags User
     * @param {InputUser} request.path.required - User info
     * @return {User} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - User not found - application/json
     */
    .post(validate('body', loginSchema), flush, controllerHandler(controller.login));

router
    .route('/:id(\\d+)', verifyToken)
    /**
     * PATCH /api/users/{id}
     * @summary Update one user
     * @tags User
     * @param {number} id.path.required - user identifier
     * @param {InputUser} request.body.required - User info
     * @return {User} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - User not found - application/json
     */
    .patch(validate('body', updateSchema), flush, controllerHandler(controller.update));

router
    .route('/:id(\\d+)')
    /**
     * POST /api/users/:id
     * @summary Disconnect a user
     * @tags User
     * @param {number} id.path.required - user identifier
     * @param {InputUser} request.body.required - User info
     * @return {User} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - User not found - application/json
     */
    .get(flush, controllerHandler(controller.logout));

router
    .route('/:id(\\d+)/refresh')
    /**
     * POST /api/users/:id/refresh
     * @summary Handle refreshToken
     * @tags User
     * @param {number} id.path.required - user identifier
     * @param {InputUser} request.body.required - User info
     * @return {User} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - User not found - application/json
     */
    .get(flush, controllerHandler(controller.handleRefreshToken));

module.exports = router;
